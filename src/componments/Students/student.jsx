import  { useState } from 'react'

export default function Student(props) {
 
  // var loading=true


  const [ loading , setLoading ] = useState(true)
 
  console.log(props)
    return (
        
            <div className="m-2">
              <div className="d-flex mb-4">
                {/* onload lorsque l'image va charger */}
                <img
                  className={ loading== false ? "border border-white p-2 mt-1":"d-none"}
                  src= {props.data.avatar}
                  height={150}
                  width={150}
                  onLoad={ () => {(setLoading(false))}} />
                {/* loading img  */}
                <div className={loading == true ? "border borde-white p-5 ": "d-none "}>
                <div className="spinner-grow text-warning" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                </div>
                <div className="d-flex flex-column ">
                  <button className="mz-1 btn btn-info m-1">
                    <i className="fas fa-eye" />
                  </button>
                  <button className="mz-1 btn btn-warning m-1">
                    <i className="fas fa-edit" />
                  </button>
                  <button className="mz-1 btn btn-danger m-1">
                    <i className="fas fa-trash" />
                  </button>
                </div>
              </div>
              <p className="text-center text-white fullname"> {props.data.nom} {props.data.pren} </p>
            </div>
        
    )
}

