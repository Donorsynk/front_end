/** @format */

import { NFTStorage, File } from "nft.storage";
const NFT_STORAGE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEI1NUE1ZDM0NENkREM5QzNlNDlhRDY1M2JiMERkMTcyZjEzQzA1ZGYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NDE5OTgyNjcwMSwibmFtZSI6ImRvbm9yc3luayJ9.bAWGKD7rRpyPStWv2UKXDp5WZsbLOWj00HK1nPHHWjM";

async function requestRegisterHospital(
  name,
  description,
  image,
  hospitalLocation,
  hospitalmot,
  stateCountry,
  businessRegistration,
  contactPhone,
  emailAddress,
  website
) {
  const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

  return nftstorage?.store({
    name,
    description,
    image,
    hospitalLocation,
    hospitalmot,
    stateCountry,
    businessRegistration,
    contactPhone,
    emailAddress,
    website
  });
}

async function main(
  name,
    description,
    image,
    hospitalLocation,
    hospitalmot,
    stateCountry,
    businessRegistration,
    contactPhone,
    emailAddress,
    website
) {
  const result = await requestRegisterHospital(
    name,
    description,
    image,
    hospitalLocation,
    hospitalmot,
    stateCountry,
    businessRegistration,
    contactPhone,
    emailAddress,
    website
  );

  return result;
}

export default main;
