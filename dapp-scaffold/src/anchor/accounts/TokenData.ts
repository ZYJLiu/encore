/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link TokenData}
 * @category Accounts
 * @category generated
 */
export type TokenDataArgs = {
  user: web3.PublicKey
  rewardMint: web3.PublicKey
  rewardBump: number
  rewardBasisPoints: beet.bignum
}

const tokenDataDiscriminator = [10, 136, 199, 13, 59, 103, 129, 70]
/**
 * Holds the data for the {@link TokenData} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class TokenData implements TokenDataArgs {
  private constructor(
    readonly user: web3.PublicKey,
    readonly rewardMint: web3.PublicKey,
    readonly rewardBump: number,
    readonly rewardBasisPoints: beet.bignum
  ) {}

  /**
   * Creates a {@link TokenData} instance from the provided args.
   */
  static fromArgs(args: TokenDataArgs) {
    return new TokenData(
      args.user,
      args.rewardMint,
      args.rewardBump,
      args.rewardBasisPoints
    )
  }

  /**
   * Deserializes the {@link TokenData} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [TokenData, number] {
    return TokenData.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link TokenData} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey
  ): Promise<TokenData> {
    const accountInfo = await connection.getAccountInfo(address)
    if (accountInfo == null) {
      throw new Error(`Unable to find TokenData account at ${address}`)
    }
    return TokenData.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Deserializes the {@link TokenData} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [TokenData, number] {
    return tokenDataBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link TokenData} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return tokenDataBeet.serialize({
      accountDiscriminator: tokenDataDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link TokenData}
   */
  static get byteSize() {
    return tokenDataBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link TokenData} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      TokenData.byteSize,
      commitment
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link TokenData} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === TokenData.byteSize
  }

  /**
   * Returns a readable version of {@link TokenData} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      user: this.user.toBase58(),
      rewardMint: this.rewardMint.toBase58(),
      rewardBump: this.rewardBump,
      rewardBasisPoints: (() => {
        const x = <{ toNumber: () => number }>this.rewardBasisPoints
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const tokenDataBeet = new beet.BeetStruct<
  TokenData,
  TokenDataArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['user', beetSolana.publicKey],
    ['rewardMint', beetSolana.publicKey],
    ['rewardBump', beet.u8],
    ['rewardBasisPoints', beet.u64],
  ],
  TokenData.fromArgs,
  'TokenData'
)
