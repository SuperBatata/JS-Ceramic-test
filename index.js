import { DID } from "dids";
import { getResolver } from "key-did-resolver";
import { CeramicClient } from "@ceramicnetwork/http-client";

const ceramic = new CeramicClient("https://localhost:7007");
async function load(id) {
  return await ceramic.loadStream(id);
}

async function resolveDID() {
  const did = new DID({ resolver: getResolver() });
  return await did.resolve(
    "did:key:z6MkiK6Vz42Hyx2bYzmMWWFzASkfpnBsuwzSSdMRkZFZ2dSP"
  );
}
const did = await resolveDID();

console.log(did);

