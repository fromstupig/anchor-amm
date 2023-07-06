import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { AnchorAmm } from "../target/types/anchor_amm";

describe("anchor-amm", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorAmm as Program<AnchorAmm>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
