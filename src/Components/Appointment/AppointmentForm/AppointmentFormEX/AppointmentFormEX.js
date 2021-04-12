import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


Modal.setAppElement('#root')



const AppointmentFormEX = ({ modalIsOpen, closeModal, bookingSubject ,date}) => {

    // const { register, handleSubmit, formState: { errors } } = useForm();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        closeModal();
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-color">{bookingSubject}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form style={{ height: "300px", width: "auto" }} onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-3" name="name" required placeholder="Your Name" type="text" {...register("name")} />
                    <br />
                    <input className="mb-3" name="Phone" placeholder="Phone Number" {...register("phone", { required: true })} />
                    <br />
                    <input className="mb-3"  name="email" type="email" placeholder="Email" {...register("email", { required: true })} />
                    <br />
                    
                    <div>
                    <select  placeholder="Gender" name="Gender" class="form-select form-select-sm" aria-label=".form-select-sm example" {...register("gender", { required: true })}>
                        <option selected disabled={true} >Gender</option>
                        <option   value="Male">Male</option>
                        <option value="female">female </option>
                        <option value="Other">Other</option>
                    </select>

                    <br/>
                    <div>
                    <input className="mb-3" name="age" type="number" placeholder="Yor Age" {...register("age", { required: true })} />
                    <input className="mb-3" name="Weight" type="number" placeholder="Weight" {...register("weight", { required: true })} />
                    </div>
                    </div>

                    <input className="btn btn-color" type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentFormEX;