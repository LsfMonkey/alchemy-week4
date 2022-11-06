export const NFTCard = ({ nft }) => {
    function processTokenId(tokenId) {
      tokenId = String(tokenId)
      tokenId.replace('0x', '').replace('0', '')
      const str = parseInt(tokenId, 16)
      return Number(str)
    }
  
    function gotoOpensea(contract, tokenId) {
      const id = processTokenId(tokenId)
      window.open(
        `https://opensea.io/assets/ethereum/${contract}/${id}`
      )
    }
  
    function handleCopy(text) {
      navigator.clipboard.writeText(text)
    }
    return (
      <div className="w-1/4 flex flex-col " style={{
        width: '200px',
        height: '120px',
        "margin-bottom": '120px'
      }}>
        <div className="rounded-md">
          <img
            className="object-cover h-128 w-full rounded-t-md"
            src={nft.media[0].gateway}
          ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110 ">
          <div className="">
            <h2 className="text-xl text-gray-800">{nft.title}</h2>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div
                className="my-btn text-gray-600"
                onClick={() => gotoOpensea(nft.contract.address, nft.id.tokenId)}
                style={{
                  backgroundColor: '#FFFF00',
                  color: '#000',
                  width: '150px',
                  height: '50px',
                  lineHeight: '50px',
                  textAlign: 'center',
                }}
              >
                view on opensea
              </div>
              <div
                className="my-btn text-gray-600"
                onClick={handleCopy(nft.contract.address)}
              >
                copy
              </div>
            </div>
          </div>
  
          <div className="flex-grow mt-2">
            <p className="text-gray-600">{nft.description}</p >
          </div>
        </div>
      </div>
    )
  }