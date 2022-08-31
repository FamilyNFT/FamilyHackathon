# FamilyHackathon
Hackathon Report

Project Name: Family
Team Members:
Azeez Mumeen - azeezmumeen6@gmail.com
Danish Ismail - danish.gakher8@gmail.com
James Albarracin - jamesalbarracin@outlook.com
Jim Sexton - sexton.james@icloud.com

Project Details:
We’re a Web3 Brand integrating the Blockchain ecosystem with our luxury-streetwear garments to add provenance and royalties to our products.

We’ve also created a Phygital marketplace, where the LUKSO community can safely trade phygital assets created in the LUKSO ecosystem

NFT Smart Contract:
We’re using the LSP8 standard which has its own ERC725Y storage so that we can continue to update the asset in the future. Since our plan is to eventually partner up with gaming companies and other metaverse platforms, we can add 3D files into the asset so that our garments can be used as a “Wearable Skin” in other metaverse/gaming platforms.

We’ve also attached a “History” metadata to the smart contract which will be updated every time the NFT/garment is sold on our marketplace. What's gonna be stored in the “History” metadata are: Condition Pictures, Condition Notes and Country

We’ve also attached Royalties to the smart contract which will go towards the original minter of the NFT.

(The NFT smart contract is also gonna be linked to the garment via a NFC chip and QR Code)

Marketplace:
The marketplace will facilitate community members wanting to resell their NFT/garments. Each time a community member wants to sell on our marketplace they must include: Country, Condition Pictures and Condition notes. These parameters are used to update the “History” metadata.

Since physicals are involved in our marketplace, we’ve added an escrow smart contract countermeasure where a smart contract holds both party’s assets until the garment is shipped over to the buyer and both parties release the assets.

(In order to guarantee only authentic garments are sold in the marketplace, the NFC chip and QR Code identifiers must be scanned in order to sell the NFT)


Store (Minting Page):
We’re planning on eventually building/developing ontop of LUKSO’s shopify plugin since our shopify is connected to a 3PL where the physical garments are gonna be shipped from

For this hackathon, a simple minting function is used since no physicals are attached to it


Whole Process:
Ordering: Community members will purchase the NFTs on our Store where they can use fiat/crypto as payment since we’re using shopify’s backend. Our shopify is integrated with our 3PL where orders will be automatically delivered from

Marketplace: Community members can then use our marketplace to safely trade/sell their Phygital assets. We’ve added an escrow feature on our marketplace to act as middleman between two parties whilst the physical garment is in transit to the buyer

This escrow smart contract will implement our Royalties utility and also update the “History” metadata of our NFT.





Future Developments

“Create” Feature:
We’ll be able to facilitate the LUKSO ecosystem with the ability to create their own Phygital collections using our resources and infrastructure. 


UX/UI Design:
Website and mobile app will be revamp for mainnet launch


Identifiers Interaction:
Our unique identifiers attached to the garment will be integrated with our infrastructure to further minimise counterfeits from entering our ecosystem


Chat Feature:
A chat function will be added to allow community members to communicate to each other whilst during a trade


Build Shopify Plugin:
Since the LUKSO team is busy with the mainnet launch, we’ll be building out LUKSO’s shopify plugin so that we can use it for our minting page on mainnet launch


“Auction” Feature:
We’ll allow community members to auction their phygital assets in the near future


Using other NFTs/Tokens as payment:
Allow community members to use other forms of payment apart from $LYX
