const TailwindTemplate = ({ component }:any) => {
    console.log(component)
    return (

            <div>
                Tailwind Template
                { component }
            </div>       
    )
}

export default TailwindTemplate;