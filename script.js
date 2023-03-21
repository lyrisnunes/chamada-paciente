const patients = [
   "Nome: Lyris", "Nome: bruno", "Nome: Gileandro", "Nome: Rafael"
];

let begin = 0;

function showPatient() {

   const patient = patients[begin];
   document.getElementById('namePatient').innerHTML = patient;
   begin++;

   if(begin >= patients.length){
      begin = 0;
   }
}