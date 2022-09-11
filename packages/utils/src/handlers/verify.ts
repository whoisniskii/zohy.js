import crypto from 'crypto';
import { verify as verifyData } from 'discord-verify/node';

/**
 * Represents a string that can be null or undefined
 * @internal
 */
type OptionalString = string | null | undefined;

/**
 * Options to be passed to the verifyRequest function
 */
export type VerifyOptions = {
  /**
   * The request body
   */
  body: OptionalString;
  /**
   * The provided Discord signature
   */
  signature: OptionalString;
  /**
   * The provided Discord timestamp
   */
  timestamp: OptionalString;
  /**
   * The public key of the application
   */
  publicKey: string;
}

/**
 * Determines if a request is valid or not based on provided values
 * @returns Whether or not the request is valid
 */
export async function verify(options: VerifyOptions);

/**
 * Determines if a request is valid or not based on provided values
 * @param body The request body
 * @param signature The provided Discord signature
 * @param timestamp The provided Discord timestamp
 * @param publicKey The public key of the application
 * @returns Whether or not the request is valid
 */
export async function verify(body: OptionalString, signature: OptionalString, timestamp: OptionalString, publicKey: string)

/**
 * Determines if a request is valid or not based on provided values
 * @returns Whether or not the request is valid
 */
export async function verify(body: OptionalString | VerifyOptions, signature?: OptionalString, timestamp?: OptionalString, publicKey?: string) {
  if (typeof body === 'string') {
    return verifyData(body, signature, timestamp, publicKey!, crypto.webcrypto.subtle);
  }

  const options = body as VerifyOptions;
  return verifyData(options.body, options.signature, options.timestamp, options.publicKey, crypto.webcrypto.subtle);
}
