import React ,{Component} from 'react';
import * as firebase from 'firebase'; 



class Test extends Component{



    addUser = ()=>{
        const db = firebase.firestore();
        db.collection("users").add({
            first: "Ada",
            last: "Lovelace",
            born: 1815
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }

    render(){


        return(

            <div>
                <button onClick={this.addUser}>add user</button>
            </div>
        );
    }
}

export default Test;