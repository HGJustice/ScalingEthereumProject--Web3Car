import React, { useState } from "react";
import { ethers } from "ethers";
import ABI from "../ABI3.json";

const contractABI = ABI;

const contractAddress = " 0xA62034dd40A4B0a72Fe0D8befa7d1ECb43338fF2";

function ApproveCoin() {
  const [formData, setFormData] = useState({
    marketplaceAddress: "",
    amount: 0,
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const approveHandel = async (event) => {
    event.preventDefault();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.approve(
      formData.marketplaceAddress,
      formData.amount
    );
    await tx.wait();
    console.log("approved");
  };
  return (
    <div>
      <h1 className="BookRide__header">BookRide</h1>
      <form onSubmit={approveHandel}>
        <input
          type="text"
          name="marketplaceAddress"
          value={formData.marketplaceAddress}
          placeholder="marketplace Address"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="amount"
          value={formData.amount}
          placeholder="amount"
          onChange={handleInputChange}
        />
        <button type="submit">approve</button>
      </form>
    </div>
  );
}

export default ApproveCoin;
