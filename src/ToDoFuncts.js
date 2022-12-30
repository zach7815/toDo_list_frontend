 export  const filterList = (e,setStatus)=>{
    const filter =e.target.innerText;
    switch(filter){
        case "Completed":
            setStatus("Completed")
            break

            case "Active":
            setStatus("Active")
            break

            case "Clear Completed":
            setStatus("Clear Completed")
            break

            default:
                setStatus("All")
                break
    }

}
