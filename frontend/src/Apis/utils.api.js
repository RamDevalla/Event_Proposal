const BASE_URL = "http://localhost:7000"


function register(data, userType) {
    return fetch(`${BASE_URL}/${userType}/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
function login(data, userType) {
    return fetch(`${BASE_URL}/${userType}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}

function getVendorSpecificProposals(id, token) {
    return fetch(`${BASE_URL}/proposal/vendor/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "authorization": token
        }
    }).then(res => res.json())
}

function createProposal(data) {


    return fetch(`${BASE_URL}/proposal`, {
        method: 'POST',
        body: data
    }).then((res) => res.json());
}

function deleteVendorProposal(id, token) {
    return fetch(`${BASE_URL}/${id}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json",
            "authorization": token
        }
    }).then(res => res.json())
}

function editProposal(data, userId) {
    return fetch(`${BASE_URL}/${userId}`, {
        method: "PUT",
        body: data
    }).then(res => res.json());
}

function getAllProposals() {
    return fetch(`${BASE_URL}/proposals`).then(res => res.json());
}

function getProposalById(id) {
    return fetch(`${BASE_URL}/proposal/${id}`).then(res => res.json());
}

function getUserSelectedProposals(id) {
    return fetch(`${BASE_URL}/selected/${id}`).then(res => res.json());
}

function addtoSelectedList(userId, data) {
    return fetch(`${BASE_URL}/selected/${userId}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "accept": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
}

function deleteSelectedProposal(id, token) {
    return fetch(`${BASE_URL}/${id}`, {
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