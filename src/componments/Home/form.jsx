import React from 'react'

export default function Form() {
    return (
        <div>
          <input
           
           type="text"
           placeholder="votre nom"
           onChange={this.handleChange}
           name="nom"
           
          />

          <input 
            type="text"
            placeholder="votre pren"
            onChange={this.handleChange}
            name="pren"

           />

            <input 
            type="text"
            placeholder="votre Avatar"
            onChange={this.handleChange}
            name="Avatar"

           />

           <input 
            type="text"
            placeholder="votre Email"
            onChange={this.handleChange}
            name="Email"

           /> 
        </div>
    )
}
