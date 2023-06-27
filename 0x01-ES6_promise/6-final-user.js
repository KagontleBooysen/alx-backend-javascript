import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  try {
    const [user, photo] = await Promise.all([userPromise, photoPromise]);
    return [{ user }, { photo }];
  } catch (error) {
    // Handle any errors that occurred during the promises
    console.error(error);
    return []; // Return an empty array if there was an error
  }
}
