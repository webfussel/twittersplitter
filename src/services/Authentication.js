import {getAuth, signInWithPopup, signOut as signOutTwitter, TwitterAuthProvider} from "firebase/auth";

export const signIn = async () => {
    const provider = new TwitterAuthProvider();
    const auth = getAuth();

    try {
        const res = await signInWithPopup(auth, provider);
        const credential = TwitterAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const secret = credential.secret;
        const user = res.user;

        return { success: true, token, secret, user }
    } catch (error) {
        return { success: false, error }
    }
}

export const signOut = async () => {
    const auth = getAuth();
    try {
        await signOutTwitter(auth);
        return { success: true }
    } catch (error) {
        return { success: false, error }
    }
}