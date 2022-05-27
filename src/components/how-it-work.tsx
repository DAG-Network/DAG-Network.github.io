import ContractorImg from '../assets/contractor.png'
import JudgeImg from '../assets/judge.png'
import HiredImg from '../assets/hired.png'

export const HowItWork = () => {
    return (
        <div id='hit' className="container">
            <div className="row title column-aligned" style={{marginTop: '10%', marginBottom: '5%' }}>
                How it works?
            </div>

            <div className="row">
                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                        The contractor creates the contract by defining:
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={ContractorImg} width='100px' height='100px' style={{marginRight: '2%'}}/>
                        <div className="subtitle2">
                        <li>
                            The work description document
                        </li>
                        <li>
                            The employee: 0xOF912L...
                        </li>
                        <li>
                            The agreed value: 2.000 DANs
                        </li>
                        <li>
                            The judge: 0xJD92...
                        </li>
                        <li>
                            The judes fee: 30 DANs
                        </li>
                    </div>
                    </div>
                    <div className='subtitle'>
                        After creating the agreement, the total value of the contract is locked in the contractor's account, this guarantees the contractor that he has the value for the service.
                        No need to develop anything by either party, this is a native feature of the protocol 
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                        The judge and the employee signs the contract
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={JudgeImg} width='100px' height='100px'/>
                        <div className="bi-check-circle-fill" style={{color: 'green', fontSize: '76px'}}></div>
                        <img alt='referal' src={HiredImg} width='100px' height='100px'/>
                    </div>
                    
                </div>

                <div className="col-md-12">
                    <div className="title">
                        After the work has been done, the contract can have 3 types of finalizes...
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                    1 - The contractor and employee notify the blockchain that the work is complete
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={HiredImg} width='100px' height='100px'/>
                        <div className="bi-check-circle-fill" style={{color: 'green', fontSize: '76px'}}></div>
                        <img alt='referal' src={ContractorImg} width='100px' height='100px'/>
                    </div>
                    <div className='subtitle'>
                        The entire contract value is directed to the employee and the judge's fee is returned to the contractor
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                    2 - The Contractor and employee notify the blockchain that the work was not done
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginTop: '5%'
                    }}>
                        <img alt='referal' src={HiredImg} width='100px' height='100px'/>
                        <div className="bi-x-circle-fill" style={{color: 'red', fontSize: '76px'}}></div>
                        <img alt='referal' src={ContractorImg} width='100px' height='100px'/>
                    </div>
                    <div className='subtitle'>
                        The entire contract value is returned to the contractor.
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                        3 - The employee and the contractor do not enter into an agreement
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'space-between',
                        marginTop: '5%'
                    }}>
                        <div className="bi-check-circle-fill" style={{color: 'green', fontSize: '76px'}}></div>
                        <img alt='referal' src={HiredImg} width='100px' height='100px'/>
                        <img alt='referal' src={ContractorImg} width='100px' height='100px'/>
                        <div className="bi-x-circle-fill" style={{color: 'red', fontSize: '76px'}}></div>
                    </div>
                    <div className='subtitle'>
                        The judge enters.
                    </div>
                </div>

                <div className="col-md-6" style={{marginTop: '5%', marginBottom: '5%' }}>
                    <div className="title2">
                    In this case, the judge will analyze the case and decide for one of the parts
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'center',
                        marginTop: '5%'
                    }}>
                        <div className="bi-check-circle-fill" style={{color: 'green', fontSize: '76px'}}></div>
                        <img alt='referal' src={JudgeImg} width='100px' height='100px'/>
                        <div className="bi-x-circle-fill" style={{color: 'red', fontSize: '76px'}}></div>
                    </div>
                    <div className='subtitle'>
                        The judge will take your fee and the contract amount will be directed from your decision
                    </div>
                </div>
            </div>
        </div>
    )
}