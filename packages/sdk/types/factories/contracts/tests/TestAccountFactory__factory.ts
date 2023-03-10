/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestAccountFactory,
  TestAccountFactoryInterface,
} from "../../../contracts/tests/TestAccountFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "accountImplementation",
    outputs: [
      {
        internalType: "contract Account",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "createAccount",
    outputs: [
      {
        internalType: "contract Account",
        name: "ret",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
    ],
    name: "getBytes32Salt",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreationCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getDeploymentData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getDeploymentDataSig",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getInitCode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getInitSig",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161311b38038061311b83398101604081905261002f91610088565b8060405161003c9061007b565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b0316608052506100b8565b61234d80610dce83390190565b60006020828403121561009a57600080fd5b81516001600160a01b03811681146100b157600080fd5b9392505050565b608051610cee6100e06000396000818160f101528181610268015261035e0152610cee6000f3fe60806040523480156200001157600080fd5b50600436106200009e5760003560e01c80636a96d66a116200006e5780636a96d66a14620001435780638cb84e18146200015a5780639f6758f31462000171578063be0742c11462000188578063de3175e3146200019f57600080fd5b8062c194db14620000a35780630445cbd314620000c557806311464fbe14620000eb5780635fbfb9cf146200012c575b600080fd5b620000ad620001b3565b604051620000bc919062000485565b60405180910390f35b620000dc620000d6366004620004b7565b620001df565b604051908152602001620000bc565b620001137f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001620000bc565b620001136200013d366004620004d5565b62000226565b620000ad62000154366004620004b7565b620002fb565b620001136200016b366004620004d5565b6200033b565b620000ad62000182366004620004b7565b6200035a565b620000ad62000199366004620004b7565b6200039b565b620000dc620001b036600462000502565b90565b606060405180602001620001c79062000416565b601f1982820381018352601f90910116604052919050565b6000620001eb620001b3565b620001f6836200035a565b604051602001620002099291906200051c565b604051602081830303815290604052805190602001209050919050565b6000806200023584846200033b565b90506001600160a01b0381163b80156200025257509050620002f5565b6040516001600160a01b038616602482015284907f00000000000000000000000000000000000000000000000000000000000000009060440160408051601f198184030181529181526020820180516001600160e01b031663189acdbd60e31b17905251620002c19062000416565b620002ce9291906200054f565b8190604051809103906000f5905080158015620002ef573d6000803e3d6000fd5b50925050505b92915050565b606062000307620001b3565b62000312836200035a565b604051602001620003259291906200051c565b6040516020818303038152906040529050919050565b600062000353826200034d85620001df565b620003e3565b9392505050565b60607f000000000000000000000000000000000000000000000000000000000000000062000388836200039b565b604051602001620003259291906200054f565b6040516001600160a01b038216602482015260609060440160408051601f198184030181529190526020810180516001600160e01b031663189acdbd60e31b17905292915050565b6000620003538383306000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b61073b806200057e83390190565b60005b838110156200044157818101518382015260200162000427565b8381111562000451576000848401525b50505050565b600081518084526200047181602086016020860162000424565b601f01601f19169290920160200192915050565b60208152600062000353602083018462000457565b80356001600160a01b0381168114620004b257600080fd5b919050565b600060208284031215620004ca57600080fd5b62000353826200049a565b60008060408385031215620004e957600080fd5b620004f4836200049a565b946020939093013593505050565b6000602082840312156200051557600080fd5b5035919050565b600083516200053081846020880162000424565b8351908301906200054681836020880162000424565b01949350505050565b6001600160a01b0383168152604060208201819052600090620005759083018462000457565b94935050505056fe608060405260405161073b38038061073b83398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610714602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b6102c78061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161026b602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061021b565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f9190610237565b60005b838110156102065781810151838201526020016101ee565b83811115610215576000848401525b50505050565b6000825161022d8184602087016101eb565b9190910192915050565b60208152600082518060208401526102568160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208ca85fd9aae744da8864087446e55ced9e420577d5c67065c4e06348f19089e464736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220819d8e9379cb4d8154741823a996cad4c977e801c747843f0bfbf41f47e3d2b664736f6c634300080f003360c0604052306080523480156200001557600080fd5b506040516200234d3803806200234d833981016040819052620000389162000118565b6001600160a01b03811660a0526200004f62000056565b506200014a565b600054610100900460ff1615620000c35760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116101562000116576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6000602082840312156200012b57600080fd5b81516001600160a01b03811681146200014357600080fd5b9392505050565b60805160a051612197620001b66000396000818161027b01528181610552015281816105d70152818161087501528181610a2c01528181610cc10152610f8701526000818161041f015281816104620152818161066a015281816106ad015261074901526121976000f3fe608060405260043610620000f35760003560e01c806353e5d9351162000089578063b0d691fe1162000060578063b0d691fe146200026b578063b61d27f614620002a0578063c399ec8814620002c5578063c4d66de814620002dd57600080fd5b806353e5d93514620001e25780638da5cb5b1462000209578063affed0e0146200024b57600080fd5b80634a58db1911620000ca5780634a58db1914620001845780634d44560d146200018e5780634f1ef28614620001b357806352d1902d14620001ca57600080fd5b806318dfb3c714620001005780633659cfe614620001275780633a871cdd146200014c57600080fd5b36620000fb57005b600080fd5b3480156200010d57600080fd5b50620001256200011f36600462001527565b62000302565b005b3480156200013457600080fd5b506200012562000146366004620015b0565b62000415565b3480156200015957600080fd5b50620001716200016b366004620015d0565b62000500565b6040519081526020015b60405180910390f35b6200012562000550565b3480156200019b57600080fd5b5062000125620001ad36600462001627565b620005cb565b62000125620001c43660046200166c565b62000660565b348015620001d757600080fd5b50620001716200073c565b348015620001ef57600080fd5b50620001fa620007f2565b6040516200017b919062001799565b3480156200021657600080fd5b506001546200023290600160601b90046001600160a01b031681565b6040516001600160a01b0390911681526020016200017b565b3480156200025857600080fd5b506001546001600160601b031662000171565b3480156200027857600080fd5b507f000000000000000000000000000000000000000000000000000000000000000062000232565b348015620002ad57600080fd5b5062000125620002bf366004620017ae565b6200081e565b348015620002d257600080fd5b506200017162000871565b348015620002ea57600080fd5b5062000125620002fc366004620015b0565b62000906565b6200030c62000a21565b828114620003575760405162461bcd60e51b815260206004820152601360248201527277726f6e67206172726179206c656e6774687360681b60448201526064015b60405180910390fd5b60005b838110156200040e57620003f98585838181106200037c576200037c6200183e565b9050602002016020810190620003939190620015b0565b6000858585818110620003aa57620003aa6200183e565b9050602002810190620003be919062001854565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525062000aba92505050565b806200040581620018b4565b9150506200035a565b5050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003620004605760405162461bcd60e51b81526004016200034e90620018d0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620004ab6000805160206200211b833981519152546001600160a01b031690565b6001600160a01b031614620004d45760405162461bcd60e51b81526004016200034e906200191c565b620004df8162000b2f565b60408051600080825260208201909252620004fd9183919062000b39565b50565b60006200050c62000cb6565b62000518848462000d30565b905062000529604085018562001854565b90506000036200053e576200053e8462000e13565b620005498262000eab565b9392505050565b7f000000000000000000000000000000000000000000000000000000000000000060405163b760faf960e01b81523060048201526001600160a01b03919091169063b760faf99034906024016000604051808303818588803b158015620005b657600080fd5b505af11580156200040e573d6000803e3d6000fd5b620005d562000efb565b7f000000000000000000000000000000000000000000000000000000000000000060405163040b850f60e31b81526001600160a01b03848116600483015260248201849052919091169063205c287890604401600060405180830381600087803b1580156200064357600080fd5b505af115801562000658573d6000803e3d6000fd5b505050505050565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163003620006ab5760405162461bcd60e51b81526004016200034e90620018d0565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316620006f66000805160206200211b833981519152546001600160a01b031690565b6001600160a01b0316146200071f5760405162461bcd60e51b81526004016200034e906200191c565b6200072a8262000b2f565b620007388282600162000b39565b5050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614620007de5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016200034e565b506000805160206200211b83398151915290565b6060604051806020016200080690620014d1565b601f1982820381018352601f90910116604052919050565b6200082862000a21565b6200086b848484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525062000aba92505050565b50505050565b60007f00000000000000000000000000000000000000000000000000000000000000006040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015620008db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000901919062001968565b905090565b600054610100900460ff1615808015620009275750600054600160ff909116105b80620009435750303b15801562000943575060005460ff166001145b620009a85760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016200034e565b6000805460ff191660011790558015620009cc576000805461ff0019166101001790555b620009d78262000f56565b801562000738576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148062000a6a5750600154600160601b90046001600160a01b031633145b62000ab85760405162461bcd60e51b815260206004820181905260248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e7460448201526064016200034e565b565b600080846001600160a01b0316848460405162000ad8919062001982565b60006040518083038185875af1925050503d806000811462000b17576040519150601f19603f3d011682016040523d82523d6000602084013e62000b1c565b606091505b5091509150816200040e57805160208201fd5b620004fd62000efb565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161562000b745762000b6f8362000fd3565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801562000bd1575060408051601f3d908101601f1916820190925262000bce9181019062001968565b60015b62000c365760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016200034e565b6000805160206200211b833981519152811462000ca85760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016200034e565b5062000b6f83838362001072565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161462000ab85760405162461bcd60e51b815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e740000000060448201526064016200034e565b60008062000d8b836040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101829052600090605c01604051602081830303815290604052805190602001209050919050565b905062000ddf62000da161014086018662001854565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525085939250506200109d9050565b600154600160601b90046001600160a01b0390811691161462000e0757600191505062000e0d565b60009150505b92915050565b600180546020830135916001600160601b0390911690600062000e3683620019a0565b91906101000a8154816001600160601b0302191690836001600160601b031602179055506001600160601b031614620004fd5760405162461bcd60e51b81526020600482015260166024820152756163636f756e743a20696e76616c6964206e6f6e636560501b60448201526064016200034e565b8015620004fd57604051600090339060001990849084818181858888f193505050503d80600081146200040e576040519150601f19603f3d011682016040523d82523d6000602084013e6200040e565b600154600160601b90046001600160a01b031633148062000f1b57503330145b62000ab85760405162461bcd60e51b815260206004820152600a60248201526937b7363c9037bbb732b960b11b60448201526064016200034e565b600180546001600160601b0316600160601b6001600160a01b038481168202929092179283905560405192048116917f0000000000000000000000000000000000000000000000000000000000000000909116907f47e55c76e7a6f1fd8996a1da8008c1ea29699cca35e7bcd057f2dec313b6e5de90600090a350565b6001600160a01b0381163b620010425760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200034e565b6000805160206200211b83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6200107d83620010c5565b6000825111806200108b5750805b1562000b6f576200086b838362001107565b6000806000620010ae85856200112f565b91509150620010bd8162001178565b509392505050565b620010d08162000fd3565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200054983836040518060600160405280602781526020016200213b60279139620012d5565b6000808251604103620011695760208301516040840151606085015160001a6200115c8782858562001353565b9450945050505062001171565b506000905060025b9250929050565b60008160048111156200118f576200118f620019c9565b03620011985750565b6001816004811115620011af57620011af620019c9565b03620011fe5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016200034e565b6002816004811115620012155762001215620019c9565b03620012645760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016200034e565b60038160048111156200127b576200127b620019c9565b03620004fd5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016200034e565b6060600080856001600160a01b031685604051620012f4919062001982565b600060405180830381855af49150503d806000811462001331576040519150601f19603f3d011682016040523d82523d6000602084013e62001336565b606091505b509150915062001349868383876200141c565b9695505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156200138c575060009050600362001413565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015620013e1573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166200140c5760006001925092505062001413565b9150600090505b94509492505050565b606083156200149057825160000362001488576001600160a01b0385163b620014885760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200034e565b50816200149c565b6200149c8383620014a4565b949350505050565b815115620014b55781518083602001fd5b8060405162461bcd60e51b81526004016200034e919062001799565b61073b80620019e083390190565b60008083601f840112620014f257600080fd5b50813567ffffffffffffffff8111156200150b57600080fd5b6020830191508360208260051b85010111156200117157600080fd5b600080600080604085870312156200153e57600080fd5b843567ffffffffffffffff808211156200155757600080fd5b6200156588838901620014df565b909650945060208701359150808211156200157f57600080fd5b506200158e87828801620014df565b95989497509550505050565b6001600160a01b0381168114620004fd57600080fd5b600060208284031215620015c357600080fd5b813562000549816200159a565b600080600060608486031215620015e657600080fd5b833567ffffffffffffffff811115620015fe57600080fd5b840161016081870312156200161257600080fd5b95602085013595506040909401359392505050565b600080604083850312156200163b57600080fd5b823562001648816200159a565b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200168057600080fd5b82356200168d816200159a565b9150602083013567ffffffffffffffff80821115620016ab57600080fd5b818501915085601f830112620016c057600080fd5b813581811115620016d557620016d562001656565b604051601f8201601f19908116603f0116810190838211818310171562001700576200170062001656565b816040528281528860208487010111156200171a57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60005b83811015620017595781810151838201526020016200173f565b838111156200086b5750506000910152565b60008151808452620017858160208601602086016200173c565b601f01601f19169290920160200192915050565b6020815260006200054960208301846200176b565b60008060008060608587031215620017c557600080fd5b8435620017d2816200159a565b935060208501359250604085013567ffffffffffffffff80821115620017f757600080fd5b818701915087601f8301126200180c57600080fd5b8135818111156200181c57600080fd5b8860208285010111156200182f57600080fd5b95989497505060200194505050565b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126200186c57600080fd5b83018035915067ffffffffffffffff8211156200188857600080fd5b6020019150368190038213156200117157600080fd5b634e487b7160e01b600052601160045260246000fd5b600060018201620018c957620018c96200189e565b5060010190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6000602082840312156200197b57600080fd5b5051919050565b60008251620019968184602087016200173c565b9190910192915050565b60006001600160601b03808316818103620019bf57620019bf6200189e565b6001019392505050565b634e487b7160e01b600052602160045260246000fdfe608060405260405161073b38038061073b83398101604081905261002291610321565b61002e82826000610035565b505061043e565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610714602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103ef565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a357825160000361029c576001600160a01b0385163b61029c5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102ad565b6102ad83836102b5565b949350505050565b8151156102c55781518083602001fd5b8060405162461bcd60e51b8152600401610148919061040b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103105781810151838201526020016102f8565b838111156100645750506000910152565b6000806040838503121561033457600080fd5b82516001600160a01b038116811461034b57600080fd5b60208401519092506001600160401b038082111561036857600080fd5b818501915085601f83011261037c57600080fd5b81518181111561038e5761038e6102df565b604051601f8201601f19908116603f011681019083821181831017156103b6576103b66102df565b816040528281528860208487010111156103cf57600080fd5b6103e08360208301602088016102f5565b80955050505050509250929050565b600082516104018184602087016102f5565b9190910192915050565b602081526000825180602084015261042a8160408501602087016102f5565b601f01601f19169190910160400192915050565b6102c78061044d6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b61009f565b565b606061004e838360405180606001604052806027815260200161026b602791396100c3565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100be573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516100e0919061021b565b600060405180830381855af49150503d806000811461011b576040519150601f19603f3d011682016040523d82523d6000602084013e610120565b606091505b50915091506101318683838761013b565b9695505050505050565b606083156101af5782516000036101a8576001600160a01b0385163b6101a85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b50816101b9565b6101b983836101c1565b949350505050565b8151156101d15781518083602001fd5b8060405162461bcd60e51b815260040161019f9190610237565b60005b838110156102065781810151838201526020016101ee565b83811115610215576000848401525b50505050565b6000825161022d8184602087016101eb565b9190910192915050565b60208152600082518060208401526102568160408501602087016101eb565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208ca85fd9aae744da8864087446e55ced9e420577d5c67065c4e06348f19089e464736f6c634300080f0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212209b5feca48b7f27c3498960c718d8c3ded67dcfd68fb3e4f22bfd4ad8e2a0228664736f6c634300080f0033";

type TestAccountFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAccountFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAccountFactory__factory extends ContractFactory {
  constructor(...args: TestAccountFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAccountFactory> {
    return super.deploy(
      _entryPoint,
      overrides || {}
    ) as Promise<TestAccountFactory>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_entryPoint, overrides || {});
  }
  override attach(address: string): TestAccountFactory {
    return super.attach(address) as TestAccountFactory;
  }
  override connect(signer: Signer): TestAccountFactory__factory {
    return super.connect(signer) as TestAccountFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAccountFactoryInterface {
    return new utils.Interface(_abi) as TestAccountFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAccountFactory {
    return new Contract(address, _abi, signerOrProvider) as TestAccountFactory;
  }
}
