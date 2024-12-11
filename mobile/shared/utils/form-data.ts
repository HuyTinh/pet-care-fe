import { serialize } from "object-to-formdata";

const options = {
  /**
   * include array indices in FormData keys
   * defaults to false
   */
  indices: false,

  /**
   * treat null values like undefined values and ignore them
   * defaults to false
   */
  nullsAsUndefineds: false,

  /**
   * convert true or false to 1 or 0 respectively
   * defaults to false
   */
  booleansAsIntegers: false,

  /**
   * store arrays even if they're empty
   * defaults to false
   */
  allowEmptyArrays: false,

  /**
   * don't include array notation in FormData keys for any Attributes excepted Files in arrays
   * defaults to false
   */
  noAttributesWithArrayNotation: true,

  /**
   * don't include array notation in FormData keys for Files in arrays
   * defaults to false
   */
  noFilesWithArrayNotation: false,

  /**
   * use dots instead of brackets for object notation in FormData keys
   * defaults to false
   */
  dotsForObjectNotation: false,
};

// Define the function toFormData to convert an object into FormData using a serialization method
export function toFormData(obj: object) {
  // Serialize the object into FormData (assuming 'serialize' and 'options' are defined elsewhere)
  return serialize(obj, options);
}

// Define the function toFormDataGPT to convert an object or array of data into FormData format
export function toFormDataGPT(data: any) {
  // Create a new FormData object to store the key-value pairs
  const formData = new FormData();

  // Loop through each key in the provided data object
  for (const key in data) {
    if (Array.isArray(data[key])) {
      // If the value is an array, append each element with the key followed by "[]"
      data[key].forEach((value) => formData.append(key + "[]", value));
    } else {
      // If the value is not an array, append it as a simple key-value pair
      formData.append(key, data[key]);
    }
  }

  // Return the populated FormData object
  return formData;
}
