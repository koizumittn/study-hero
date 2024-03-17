import React from "react";
import * as firestore from "@google-cloud/firestore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// async function getInitialProps() {
//   const db = new firestore.Firestore();
//   let result = await
//     db.collection('users')
//     .orderBy('totalPoints', 'desc')
//     .get()
//     .then(snapshot => {
//       let data: any = []
//       snapshot.forEach((doc) => {
//         data.push(
//           Object.assign({
//             id: doc.id
//           }, doc.data())
//         )
//       })
//       return data;
//     })
//   return {datas: result}
// }

export default async function Home() {

  const db = new firestore.Firestore();
  let users = await
    db.collection('users')
    .orderBy('totalPoints', 'desc')
    .get()
    .then(snapshot => {
      let data: any = []
      snapshot.forEach((doc) => {
        data.push(
          Object.assign({
            id: doc.id
          }, doc.data())
        )
      })
      return data;
    })

  return (
    <Table>
      <TableHeader>
        <TableRow>
            <TableHead>順位</TableHead>
            <TableHead>氏名</TableHead>
            <TableHead>所属</TableHead>
            <TableHead>Badge Pts</TableHead>
            <TableHead>Cert Pts</TableHead>
            <TableHead>Total Pts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map( (user: any, index: any) => (
          <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.organization}</TableCell>
              <TableCell>{user.badgePoints}</TableCell>
              <TableCell>{user.certPoints}</TableCell>
              <TableCell>{user.totalPoints}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    )
}
