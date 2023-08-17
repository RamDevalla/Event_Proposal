const BASE_URL = "http://localhost:7000"


function register(data, userType) {
    return fetch(`/api/v1/${userType}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
function login(data, userType) {
    return fetch(`/api/v1/${userType}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function getVendorSpecificProposals(id, token) {
    return fetch(`/api/v1/proposal/vendor/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "authorization": token
        }
    }).then(res => res.json())
}

function createProposal(data) {


    return fetch(`/api/v1/proposal`, {
        method: 'POST',
        body: data
    }).then((res) => res.json());
}

function deleteVendorProposal(id, token) {
    return fetch(`/api/v1/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "authorization": token
        }
    }).then(res => res.json())
}

function editProposal(data, userId) {
    return fetch(`/api/v1/${userId}`, {
        method: "PUT",
        body: data
    }).then(res => res.json());
}

function getAllProposals() {
    return fetch(`/api/v1/proposals`).then(res => res.json());
}

function getProposalById(id) {
    return fetch(`/api/v1/proposal/${id}`).then(res => res.json());
}

function getUserSelectedProposals(id) {
    return fetch(`/api/v1/selected/${id}`).then(res => res.json());
}

function addtoSelectedList(userId, data) {
    return fetch(`/api/v1/selected/${userId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

function deleteSelectedProposal(id, token) {
    return fetch(`/api/v1/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "authorization": token
        }
    }).then(res => res.json())
}


export default BASE_URL;
export {
    register,
    login,
    getVendorSpecificProposals,
    getAllProposals,
    deleteVendorProposal,
    getProposalById,
    addtoSelectedList,
    deleteSelectedProposal,
    createProposal,
    getUserSelectedProposals,
    editProposal
}