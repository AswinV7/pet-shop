const Validation = (values) => {

    let errors = {}

    if(!values.shopName){
        errors.shopName = "Name is required"
    }
    if(!values.shopLocation){
        errors.shopLocation = "Location is required"
    }
    if(!values.pin){
        errors.pin = "Pin is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    if(!values.phone){
        errors.phone = "Phone is required"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    if(!values.conformPassword){
        errors.conformPassword = "Password is required"
    }
    if(!values.petName){
        errors.petName = "Name is required"
    }
    if(!values.petBreed){
        errors.petBreed = "Breed is required"
    }
    if(!values.petAge){
        errors.petAge = "Age is required"
    }
    if(!values.petDescription){
        errors.petDescription = "Description is required"
    }
    if(!values.petPrice){
        errors.petPrice = "Phone is required"
    }
    if(!values.userName){
        errors.userName = "Name is required"
    }

    return errors
}

export default Validation
