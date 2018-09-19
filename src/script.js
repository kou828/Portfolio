Vue.component('cmp-proficiency', {
    template: `
        <div> 習熟度 </div> 
        <table>
            <tr>
                <td>★★★</td> 
                <td> ：業務経験有 </td> 
                <td> ★★☆ < /td> 
                <td> ：趣味でよく利用 </td> 
                <td> ★☆☆ < /td> 
                <td> ：学習はしたが、 実戦経験ほぼなし < /td> 
            </tr> 
        </table>`
});

var proficiency = new Vue({
    el: '#proficiency',
})