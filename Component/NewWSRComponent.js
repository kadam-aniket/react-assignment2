import React, { Component } from 'react';
import {DropzoneArea} from 'material-ui-dropzone'
import ReForm from '../Form-Component/FormComponent';
import '../NewWSRComponent/NewWSRComponent.css';

class NewWSRComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        files: []
      };
    }
    handleChange(files){
      this.setState({
        files: files
      });
    }
    render(){
      return (
            <div className="border">
                <h5>Add New WSR</h5>
                <p className="border-margin">Upload Files</p>
                <DropzoneArea onChange={this.handleChange.bind(this)} maxFileSize={2000000}/>
                <textarea className="margin-right" rows="4" cols="120" defaultValue="Links/Comments"></textarea>
                <p className="border-margin">Risks</p>
                <ReForm/>
            </div>
      )
    }
  }

  export default NewWSRComponent