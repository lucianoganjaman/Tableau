import 
function App (){
  let infoclient = [
   {id:1, prenomclient:"Jean Luciano",nomclient:"RAKOTOMAMONJY",CINClient:"401001010100",datenaissclient:"17/07/2005",situation_matrimoniale:"marié",sexe_client:"homme",adresseClient:"Antanimasaja",activiteClient:"develppeur application mobile",ContactClient:"0327586034"},
  {id:2, prenomclient:"Fenosoa Luciendro",nomclient:"RAKOTONIRINA",CINClient:"401010120001",datenaissclient:"11/11/2006",situation_matrimoniale:"célibataire",sexe_client:"homme",adresseClient:"Mahatsinjo",activiteClient:"developeur en back-end"ContactClient:"0327586103"},
  {id:3, prenomclient:"Richia Carole",nomclient:"HANINTSOA",CINClient:"401001011003",datenaissclient:"04/02/2005",situation_matrimoniale:"mariée",sexe_client:"femme",adresseClient:"Antanimalandy",activiteClient:"Concepteur de réseaux"ContactClient:"0327586034"},
  {id:4, prenomclient:"Stewarda",nomclient:"RAZANANDRAIVO",CINClient:"401001011003",datenaissclient:"01/07/2006",situation_matrimoniale:"célibataire",sexe_client:"femme",adresseClient:"Antanimasaja",activiteClient:"developeur web design",ContactClient:"0327586034"},
  ]
   let infocaution = [
   {id:1, prenomcaution:"Tiffany",nomcaution:"MAHARO",CINcaution:"401001010100",Contactcaution:"0327586103",Id_client:"2",},
  {id:2, prenomcaution:"Mc Augustin",nomcaution:"RATSIRAHONANA",CINcaution:"401110120001",Contactcaution:"0326156099",Id_client:"1"},
  {id:3, prenomcaution:"Andriannah",nomcaution:"RASOLOARINIRANA",CINcaution:"401001011003",Contactcaution:"0377886338",Id_client:"3"},
  {id:4, prenomcaution:"Vonjiniaina Nanciah",nomcaution:"RAKOTOARISON",CINcaution:"401001011003",Contactcaution:"0327886338",Id_client:"4"}, 
]
  let detailcredit = [
   {id:1,date_demande:"01/06/2025",type_demande:"scoring",montant_demande:"10 000 0000 MGA",dure_rembourse:"24 mois",Id_client:"2"},
  {id:2, date_demande:"01/06/2025",type_demande:"nouveau cas",montant_demande:"1 500 000 MGA",dure_rembourse:"12 mois",Id_client:"1"},
  {id:3,date_demande:"01/06/2025",type_demande:"recurent",montant_demande:"4 000 000 MGA",dure_rembourse:"19 mois",Id_client:"3"},
  {id:4,date_demande:"01/06/2025",type_demande:"BCB",montant_demande:"100 000 000 MGA",dure_rembourse:"6 mois",Id_client:"4"}, 
]
return (
  <div>

      <h1>GESTION DE DEMANDE DE PRET</h1>
   

      <h2>Liste des cautions de chaque client</h2>
    <table border="1">
      <tr>
        <th>
          ID
        </th>
          <th>
          prenomclient
        </th>
          <th>
          nomclient
        </th>
          <th>
          CINClient
        </th>
          <th>
          datenaissclient
        </th>
          <th>
          situation_matrimoniale
        </th>
          <th>
          sexe_client
        </th>
          <th>
          adresseClient
        </th>
         <th>
          activiteClient
        </th>
          <th>
          ContactClient
        </th>
      </tr>
      (infoclient.map(infoclient)) => (
        <tr>
          <td>{infoclient.id}</td>
          <td>{infoclient.prenomclient}</td>
          <td>{infoclient.nomclient}</td>
          <td>{infoclient.CINClient}</td>
          <td>{infoclient.datenaissclient}</td>
          <td>{infoclient.situation_matrimoniale}</td>
          <td>{infoclient.sexe_client}</td>
          <td>{infoclient.adresseClient}</td>
          <td>{infoclient.activeClient}</td>
          <td>{infoclient.ContactClient}</td>
        </tr>
      )    
    </table>
     <h2>Liste des cautions de chaque client</h2>
    <table border="1">
      <tr>
        <th>
          ID
        </th>
          <th>
          prenomcaution
        </th>
          <th>
          nomcaution
        </th>
          <th>
          CINcaution
        </th>
          <th>
          Contactcaution
        </th>
          <th>
          Id_client
        </th>
      </tr>
      (infocaution.map(infocaution)) => (
        <tr>
          <td>{infocaution.id}</td>
          <td>{infocaution.prenomcaution}</td>
          <td>{infocaution.nomcaution}</td>
          <td>{infocaution.CINcaution}</td>
          <td>{infocaution.Contactcaution}</td>
          <td>{infocaution.Id_client}</td>
        </tr>
      )    
    </table>

      <h2>Détails du demande de crédit</h2>
    <table border="1">
      <tr>
        <th>
          ID
        </th>
          <th>
          Date
        </th>
          <th>
          Type
        </th>
          <th>
          Montant
        </th>
          <th>
          Duré de remboursement
        </th>
          <th>
          Id_client
        </th>
      </tr>
      (detailcredit.map(infoclient)) => (
        <tr>
          <td>{detailcredit.id}</td>
          <td>{detailcredit.date_demande}</td>
          <td>{detailcredit.type_demande}</td>
          <td>{detailcredit.montant_demande}</td>
          <td>{detailcredit.dure_rembourse}</td>
          <td>{infoclient.Id_client}</td>
          

        </tr>
      )    
    </table>
  </div>
)
}