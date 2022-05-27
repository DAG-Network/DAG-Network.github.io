import Tokenomics1Img from '../assets/tkn1.png'
import Tokenomics2Img from '../assets/tkn1.png'


export const Tokenomics = () => {
    return (
        <div id='tokenomics' className="container">
            <div className="row title column-aligned">
                The Tokenomics
                </div>

                <div className="row">

                <div className="col-md-12 column-aligned left-aligned">
                    <div className="subtitle left-margin">
                        Anyone can buy DANs through the official D.A.O platform responsible for the DAN network. <br />
                        DANs are backed by US Dollar, when someone buys them, D.A.O authorities create new coins on the network                    </div>
                </div>

                <div className="col-md-12 column-aligned">
                    <img alt='referal' src={Tokenomics1Img} width='350px'/>
                </div>

                <div className="col-md-12 column-aligned left-aligned">
                    <div className="subtitle left-margin">
                        DAO guarantees the repurchase of coins as well, that is, if you have received DANs for any service provided and want to exchange for US dollars or any other available crypto, just make the operation through the DAO platform.
                    </div>
                </div>
                
                <div className="col-md-12 column-aligned">
                    <img alt='referal' src={Tokenomics2Img} width='350px'/>
                </div>

                </div>
        </div>
    )
}