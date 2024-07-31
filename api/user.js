import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    console.log(user);
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'That email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      console.log(error.code);
      return {error: 'Please enter a valid email address'};
    }
    return {error: 'Something went wrong with your request.'};
  }
};
