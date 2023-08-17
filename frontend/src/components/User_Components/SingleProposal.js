import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addtoSelectedList, getProposalById , deleteSelectedProposal} from '../../utils/utils.api';
import { useAppContext } from '../../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SingleProposal({selectedProposals,onDeleteFunc}) {
    const params = useParams();
    const [proposal, setProposal] = useState([]);
    const { userDetails } = useAppContext();
    const navigate = useNavigate();
    useEffect(() => {
        getProposalById(params.id).then((data) => {
            setProposal(data.data)
        })
    }, [params.id])
    const id = proposal._id;
    const data = {
        id
    }
    console.log(proposal)
    return proposal.length === 0 ? <div className='preLoading'>Loading... !!!</div> :
        <div className='bodyContainer'>
            <div className='topContainer'>
                <div className='topRow'>
                    <div>Proposal <span className='ContactName'>{proposal.vendorId.name} Contract</span></div>

                    <div className='SelectButton'>
                        <button
                            onClick={() => {
                                addtoSelectedList(userDetails.user._id, data).then(data => {
                                    // console.log(data);
                                    data.status === "Success" ? toast.success("Added Successfully" , {
                                        position : 'top-right'
                                    }) : toast.error(data.message , {
                                        position : 'top-right'
                                    })
                                })
                            }}
                        >Select</button>
                        <button
                        onClick={()=>{
                            deleteSelectedProposal(selectedProposals._id, data).then(res => {
                                if (res.status === "Success") {
                                    toast.success("Deleted Successfully", {
                                        position: 'top-right'
                                    })
                                    console.log(selectedProposals._id)
                                    // onDeleteFunc(selectedProposals.data);
                                } else {
                                    toast.error(res.message, {
                                        position: 'top-right'
                                    })
                                }
                            })
                         }}
                        > Remove  
                        </button>
                        <button
                            onClick={() => navigate(-1)}
                        >Back</button>

                    </div>

                </div>
                <div className='row1'>
                    <div className='vendorDetails'>
                        <img src={proposal.images[0]} alt='Vendor_image' />
                        <div className='column'>
                            <div className='topic1'>Name</div>
                            <div className='details1'>{proposal.vendorId.name}</div>
                        </div>
                        <div className='column'>
                            <div className='topic1'>Email</div>
                            <div className='details1'>{proposal.vendorId.email}</div>
                        </div>
                        <div className='column'>
                            <div className='topic2'>Start Date</div>
                            <div className='details2'>{proposal.from}</div>
                        </div>
                        <div className='column'>
                            <div className='topic2'>End Date</div>
                            <div className='details2'>{proposal.to}</div>
                        </div>
                        <div className='column'>
                            <div className='topic2'>Event Type</div>
                            <div className='details2'>{proposal.eventType}</div>
                        </div>
                        <div className='column'>
                            <div className='topic2'>Event Class</div>
                            <div className='details2'>Class A</div>
                        </div>
                    </div>
                    <div className='venue'>
                        <span className='venueTopic'>
                            Venue And Arrangements
                        </span>
                        <span className='venueDetails'>
                            {proposal.eventPlace}
                        </span>
                    </div>
                    <div className='venue'>
                        <span className='venueTopic'>
                            Food Preferences
                        </span>
                        <span className='venueDetails'>
                            {proposal.foodPreferences}
                        </span>
                    </div>
                </div>
                <div className='row2'>
                    <div className='album'>
                        <span className='albumtopic'>
                            My album
                        </span>
                        <span className='albumImages'>
                            {
                                proposal.images.map((data, index) => (
                                    <img src={data} alt='album' key={index} />
                                ))
                            }
                        </span>
                    </div>
                    <div className='album contact'>
                        <span className='albumtopic'>
                            Contact
                        </span>
                        <span className='albumdetails'>
                            {proposal.vendorId.contact}
                        </span>
                    </div>
                    <div className='album contact'>
                        <span className='albumtopic'>
                            Events
                        </span>
                        <span className='albumdetails' id='eventDetails'>
                            {proposal.events}
                        </span>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
}