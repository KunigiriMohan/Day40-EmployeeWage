class RegexCheck{
    
    constructor(...params){         //constructer for intialising variables
        this.pinCode=params[0];
    }

    set pinCode(pinCode){
        let pinCodeRegex=RegExp('^[1-9]{1}[0-9]{5}$');          //defining regex pattern for pincode
        if(pinCodeRegex.test(pinCode)){                 //Checking input pincode matches according to Regex validation
            this._pinCode=pinCode;
        }
        else{
            throw Error('Enter proper pincode!');           //throwing error if pincode doesnot match
        }
    }

    get pinCode(){
        return this.pinCode;
    }
    toString(){             //toString() method to print Pincode
        return "Pincode is : "+this._pinCode;
    }
}

//UC1 Checking Pincode will be Six Digit Number

try{
    let object=new RegexCheck(400088);
    console.log(object.toString());
}
catch (e){
    console.log(e);
}
