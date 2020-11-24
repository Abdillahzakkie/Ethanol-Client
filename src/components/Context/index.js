import React, { createContext, Component } from "react";
import Web3 from 'web3';
import { abi as _ethnolABI } from "../../contracts/Ethanol.json";
import { abi as _ethnolVaultABI } from "../../contracts/EthanolVault.json";

const web3Context = createContext();

class Web3Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            loading: true,
            web3: null,
            user: null,
            token: null,    
            contract: null,
            balance: 0,
            totalSupply: 0,
            walletBalance: 0
        }
    }

    async componentDidMount() {
        // await this.connectWallet()
    }

    // loadWeb3
    loadWeb3 = async () => {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            // cancel autorefresh on network change
            window.ethereum.autoRefreshOnNetworkChange = false;

        } else if(window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert("Non-Ethereum browser detected. You should consider trying Metamask")
        }
    }

    // load blockchain data
    loadBlockchainData = async () => {
        const web3 = window.web3;
        // const Ethanol = '0x508726C4126fDa623e605499795d5be0b664E93C';
        const Ethanol = '0x63D0eEa1D7C0d1e89d7e665708d7e8997C0a9eD6';
        // const EthanolVault = '0x9aBe2b156D5357F1e77500fc83fe51250B7F2106';

        const token = new web3.eth.Contract(_ethnolABI, Ethanol);
        // const contract = new web3.eth.Contract(_ethnolVaultABI, EthanolVault);
        const accounts = await web3.eth.getAccounts();
        const user = accounts[0];

        const balance = this.fromWei(web3, await token.methods.balanceOf(user).call());
        const totalSupply = this.fromWei(web3, await token.methods.totalSupply().call());
        const walletBalance = this.fromWei(web3, await token.methods.balanceOf('0x3A2fB39F16afA7f745375D4181E80Ee9f962ea90').call());

        this.setState({ 
            loading: false,
            web3, 
            user,
            token,
            // contract,
            balance,
            totalSupply,
            walletBalance
        });
    }

    connectWallet = async () => {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    fromWei = (web3, _amount) => web3.utils.fromWei(_amount.toString(), 'ether');

    totalTokenSupply = async () => {
        return await this.state.token.methods.totalSupply().call();
    }

    claimableRewards = async () => {
        // return await this.state.contract.methods.checkRewards(this.state.user).call();
    }

    MonthlySave = async () => {

    }

    YearlySave = async () => {

    }

    shareRewards = async () => {

    }

    ReleaseTokens = async () => {

    }

    SeedRewardPool = async => {

    }

    withdrawRewards = async _amount => {
        if(this.state.loading) return this.connectWallet();   
        // return await this.state.contract.methods.withdrawRewards(this.state.user).call();
    }

    getLockedTokens = async () => {  
        // return await this.state.contract.methods.getLockedTokens(this.state.user).call();
    }

    render() {
        return (
            <web3Context.Provider value= {{
                ...this.state,
                connectWallet: this.connectWallet,
                totalTokenSupply: this.totalTokenSupply,
                getLockedTokens: this.getLockedTokens,
                claimableRewards: this.claimableRewards
            }}>
                {this.props.children}
            </web3Context.Provider >
        )
    }
}

export { web3Context, Web3Provider }