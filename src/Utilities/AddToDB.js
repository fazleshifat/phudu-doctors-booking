import { toast, ToastContainer } from "react-toastify";



const getStoredAppointment = () => {
    const storedAppointmentSTR = localStorage.getItem('appointmentList');
    if (storedAppointmentSTR) {
        const storedAppointmentData = JSON.parse(storedAppointmentSTR);
        return storedAppointmentData;
    }
    else {
        return [];
    }
}

const addToStoreAppointment = (id, name) => {
    // console.log(name)
    const storedAppointmentData = getStoredAppointment();

    if (storedAppointmentData.includes(id)) {
        toast.error('Already booked this doctor!', {
            position: "bottom-right",
            theme: "colored",

        });
        return false;

    }
    else {

        storedAppointmentData.push(id);
        const data = JSON.stringify(storedAppointmentData)
        localStorage.setItem('appointmentList', data)
        toast.success(`Successfully booked an appointment with ${name}`, {
            position: "bottom-right",
            theme: "colored",
        });
        return true;

    }
}

const removeAppointment = (id, name) => {
    const appointment = getStoredAppointment();
    // const convertedAppointment = parseInt(appointment)
    const remainingAppointment = appointment.filter(appointment => parseInt(appointment) !== id)

    localStorage.setItem('appointmentList', JSON.stringify(remainingAppointment))
    toast.success(`Successfully Canceled an appointment with ${name}`, {
        position: "bottom-right",
        theme: "colored",
    });



}



export { addToStoreAppointment, getStoredAppointment, removeAppointment }