import "./home.css"
import ListStudent from "../Students/list-student"
import React from 'react'
import StudentModel from "../../models/student.model"
import NewStudent from "../Students/new-student";
import Form from "./form"
import axios from "../../utils/axios";
class Home extends React.Component {

  constructor() {

    // call the constructor of the parent class React.component 
    super();
    //data
    this.state = {

      nom: "",
      pren: "",
      avatar: "",
      email: "",
      list_student_data: [],
    };
    console.log(this.state);
  }

  //    list_student_data :[

  //     new StudentModel ("nom1","pren1","nom1@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
  //     new StudentModel ("nom2","pren2","nom2@gmail.com","https://i.imgur.com/1o1zEDM.png",false),
  //     new StudentModel ("nom3","pren3","nom3@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
  //     new StudentModel ("nom1","pren1","nom1@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
  //     new StudentModel ("nom2","pren2","nom2@gmail.com","https://i.imgur.com/1o1zEDM.png",false),
  //     new StudentModel ("nom3","pren3","nom3@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
  //     new StudentModel ("nom3","pren3","nom3@gmail.com","https://i.imgur.com/1o1zEDM.png",true),
  //     new StudentModel ("nom3","pren3","nom3@gmail.com","https://i.imgur.com/1o1zEDM.png",true),

  //    ]

  //   };
  //   console.log(this.state.student);
  // }
  render() {
    return (
      <>
        <h1 className="text-center text-white mt-5">
          🧑‍🎓 LMS-APP : <span className="text-warning">Home</span> 🏠
      </h1>


        <div className="container-fluid d-flex p-4">
          < NewStudent

            handleChange={this.handleChange}
            handleSubmit={this.addStudent}

          />


          <ListStudent dataList={this.state.list_student_data} />

        </div>

      </>
    );
  }

  handleChange = (event) => {

    let valueInput = event.target.value;
    let nameInput = event.target.name;

    this.setState({
      [nameInput]: valueInput
    })
    console.log(valueInput, nameInput);
  };

  addStudent = (event) => {

    // ne pas acctualiser la page 

    event.preventDefault();

    // creer un objet de type student 

    let nStudent = new StudentModel(


      this.state.nom,
      this.state.pren,
      this.state.avatar,
      this.state.email,
      false
    );


    //ne pas actualiser la page 


    event.preventDefault();


    // vider les inputs formulaire

    event.target.reset();

    //validation du formilaire 

    if (this.state.nom == "" || this.state.pren == "" || this.state.avatar == "" || this.state.email == "") {
      alert("veuillez ramplire les champs du formulaire")
    } else {

      let nStudent = new StudentModel(

        this.state.nom,
        this.state.pren,
        this.state.avater,
        this.state.email,
        false
      );
      // vider les states 
      this.setState({
        nom: "",
        pren: "",
        avatar: "",
        email: "",
      })


      // ajouter student a la liste 

      // this.state.list_student_data.push(nStudent);

      let newStudentList = this.state.list_student_data;

      newStudentList.push(nStudent);

      this.setState(
        {
          list_student_data: newStudentList,

        }
      );

      // ajouter l'etudiant a la partie serveur (firebase) en utilisant axios 

      axios.post("students.json", nStudent).then((response)=>{ 
        console.log(response)
      })






    };

  };














}




export default Home; 
