        let params = [];
        let par = [];
        let id2 = "";
    
        document.getElementById("button1").addEventListener("click" , getele);
        function getele()
        {
            let page=document.getElementById('page').value;
            let name1=document.getElementById('name1').value;
            let name2=document.getElementById('name2').value;
            let id1=document.getElementById('id1').value;

            if (page !== ""){
                params.push("page=" + page);
            }
            if (id1 !== ""){
                id2 = "/" + id1;
            }
            if (name1 !== ""){
                params.push("first_name=" + name1);
            }
            if (name2 !== ""){
                params.push("last_name=" + name2);
            }

            par = id2 + "?" + params.join("&");

            const myHeaders = new Headers();
            myHeaders.append('Authorization' , 'Bearer 55A-3rhf2qkiXAIjRb27VMXElPJjK3gInWxj');
        
        fetch('https://gorest.co.in/public-api/users' + par, {
            method: 'GET',
            headers: myHeaders ,
        })
    
        .then(response => response.json())

        .then(data => console.log(data));
        }


        ///////////////////////////////////////////////////////////////////
                
        document.getElementById("button2").addEventListener("click" , postele);

        function postele()
        {
            let name1=document.getElementById('name1').value;
            let name2=document.getElementById('name2').value;
            let email=document.getElementById('email').value;
            let gender=document.getElementById('gender').value;
            const myHeaders = new Headers();

            myHeaders.append('Authorization' , 'Bearer 55A-3rhf2qkiXAIjRb27VMXElPJjK3gInWxj');
            myHeaders.append('content-Type', 'application/json');
        
        fetch('https://gorest.co.in/public-api/users', {
            method: 'POST',
            headers: myHeaders ,

            body: JSON.stringify({
                "first_name": name1,
                "last_name":name2,
                "email":email,
                "gender":gender,
            })
        })
    
        .then(response => response.json())

        .then(data => console.log(data));
        }

        ////////////////////////////////////////////////////////////////////

        document.getElementById("button3").addEventListener("click" , putele);

        function putele()
        {
            let id1=document.getElementById('id1').value;
            let name1=document.getElementById('name1').value;
            let name2=document.getElementById('name2').value;
            let email=document.getElementById('email').value;
            let gender=document.getElementById('gender').value;
            const myHeaders = new Headers();
            let obj = {};

            if (id1 !== ""){
                (obj.id = id1);
                   }
            if (name1 !== ""){
                (obj.first_name = name1);
                   }
            if (name2 !== ""){
                    (obj.last_name = name2);
                   }
            if (email !== ""){
                    (obj.email = email);
                   }
            if (gender !== ""){
                    (obj.gender = gender);
                   }
            myHeaders.append('Authorization' , 'Bearer 55A-3rhf2qkiXAIjRb27VMXElPJjK3gInWxj');
            myHeaders.append('content-Type', 'application/json');
        
        fetch('https://gorest.co.in/public-api/users/' + id1 , {
            method: 'PUT',
            headers: myHeaders ,

            body: JSON.stringify(obj)
    })
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    }
    ///////////////////////////////////////////////////

    document.getElementById("button4").addEventListener("click" , delele);

    function delele(){
        let id1=document.getElementById('id1').value;
        const myheaders = new Headers();
        myheaders.append('Authorization', 'Bearer vR-wrPau99UeQEXboeZ-hHBAK9A6ZtyievSs');
        myheaders.append('content-Type', 'application/json');
        fetch("https://gorest.co.in/public-api/users/"+ id1 ,{
        method:'Delete',
        headers: myheaders,
        })
    .then(response => response.json())
    .then(data => console.log(data));
    }