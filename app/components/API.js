import React from 'react'
import axios from 'axios'
import Main from './Main'
import qWord from './Main'


let API = {
    getGitSearch: function () {
        return new Promise (function (resolve, reject) {
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: 'react'
                }
                }
            ).then(function(data){
                resolve(data.data);
                console.log(data.data.items);
            })
        })
    }
}

/*fetch('https://api.github.com/search/repositories?q=react')
    .then(function(response) {

     console.log(data.data.items);
    })
 fetch('https://api.github.com/search/repositories?q=react')
 .then(function(response) {
 console.log(response.status);
 return response.json()
 }).then(function (dataGit) {
*/



/*axios.get('https://api.github.com/search/repositories?q=react',{}).then(function (data) {
 resolve(data.data.items);
 console.log(data.data.items);
 })*/
export default API;