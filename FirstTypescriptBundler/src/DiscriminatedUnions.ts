type SuccessApiResponse = {
    status: "Success";
    data: { id: string; name: string };
};

type ErrorApiResponse = {
    status: "Error";
    error: string;
};




type UserApiResponse = {
    status: "Error" | "Success";
    data?: { id: string; name: string };
    error?: string;
}

function handleResponse(response: UserApiResponse) {
    if (response.status === "Success") {
        console.log(response.data.name);
    } else {
        console.error(response.error.length);
    }
}


type ApiResponse = SuccessApiResponse | ErrorApiResponse;

function handleApiResponse(response: ApiResponse) {
    if (response.status === "Success") {
        console.log(response.data.name);
    } else {
        console.error(response.error.length);
    }
}


