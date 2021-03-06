import axios from 'axios'
// get the account details
export async function api() {
    var settings = {
        credentials: 'include',
        "async": true,
        "crossDomain": true,
        "url": "https://api-sandbox.starlingbank.com/api/v2/accounts",
        "method": "GET",
        "headers": {
          'Content-Type': 'text/plain',
          "accept": "application/json",
          "authorization": "Bearer eyJhbGciOiJQUzI1NiJ9.eyJpc3MiOiJhcGktZGVtby5zdGFybGluZ2JhbmsuY29tIiwic3ViIjoiYTU1MDNlYmQtMjdkYS00NGI5LTk3OTYtMjc0MDcwMTQ1Y2Y2IiwiZXhwIjoxNTc0MTk0ODI1LCJpYXQiOjE1NzQxMDg0MjUsInNjb3BlIjoiYWNjb3VudC1ob2xkZXItbmFtZTpyZWFkIGFjY291bnQtaG9sZGVyLXR5cGU6cmVhZCBhY2NvdW50LWlkZW50aWZpZXI6cmVhZCBhY2NvdW50LWxpc3Q6cmVhZCBhY2NvdW50OnJlYWQgYWRkcmVzczplZGl0IGFkZHJlc3M6cmVhZCBhdHRhY2htZW50OnJlYWQgYXR0YWNobWVudDp3cml0ZSBhdXRob3Jpc2luZy1pbmRpdmlkdWFsOnJlYWQgYmFsYW5jZTpyZWFkIGNhcmQtY29udHJvbDplZGl0IGNhcmQ6cmVhZCBjb25maXJtYXRpb24tb2YtZnVuZHM6cmVhZCBjdXN0b21lcjpyZWFkIGVtYWlsOmVkaXQgbWFuZGF0ZTpkZWxldGUgbWFuZGF0ZTpyZWFkIG1hcmtldGluZy1wcmVmZXJlbmNlczpyZWFkIG1hcmtldGluZy1wcmVmZXJlbmNlczp3cml0ZSBtZXJjaGFudDpyZWFkIG1ldGFkYXRhOmNyZWF0ZSBtZXRhZGF0YTplZGl0IHBheWVlOmNyZWF0ZSBwYXllZTpkZWxldGUgcGF5ZWU6ZWRpdCBwYXllZS1pbWFnZTpyZWFkIHBheWVlOnJlYWQgcGF5LWxvY2FsOmNyZWF0ZSBwYXktbG9jYWwtb25jZTpjcmVhdGUgcGF5LWxvY2FsOnJlYWQgcHJvZmlsZS1pbWFnZTplZGl0IHByb2ZpbGUtaW1hZ2U6cmVhZCByZWNlaXB0OnJlYWQgcmVjZWlwdHM6cmVhZCByZWNlaXB0OndyaXRlIHNhdmluZ3MtZ29hbDpjcmVhdGUgc2F2aW5ncy1nb2FsOmRlbGV0ZSBzYXZpbmdzLWdvYWw6cmVhZCBzYXZpbmdzLWdvYWwtdHJhbnNmZXI6Y3JlYXRlIHNhdmluZ3MtZ29hbC10cmFuc2ZlcjpkZWxldGUgc2F2aW5ncy1nb2FsLXRyYW5zZmVyOnJlYWQgc3RhbmRpbmctb3JkZXI6Y3JlYXRlIHN0YW5kaW5nLW9yZGVyOmRlbGV0ZSBzdGFuZGluZy1vcmRlcjpyZWFkIHN0YXRlbWVudC1jc3Y6cmVhZCBzdGF0ZW1lbnQtcGRmOnJlYWQgdHJhbnNhY3Rpb246ZWRpdCB0cmFuc2FjdGlvbjpyZWFkIiwiYWNjb3VudEhvbGRlclVpZCI6IjY5ZjhhYmExLWZjOTUtNDRmZC1iNWExLTE3YjZiN2I3NjRkYyIsInRva2VuVWlkIjoiNTEwNDk1Y2EtN2Y4NS00Y2NhLTgxOGUtYjFiZmNjYjUxZjY4IiwiYXBpQWNjZXNzVWlkIjoiYmY2ZmZlZDMtMTM2NC00NGJiLTkzZWItYWVmNWYxOThmODhmIn0.TrkXzgEabvJefRnYB1YRzGqxwIGO5KOIgYM6HCt4qzM3QrBH-MemGj03LMQXfzzx57cn-RUwbLR6LhonzOphDu_7mRp7DLJ8AR6Ml-0teO_3gg15GG2wS7UpAbshsNVdMmp6NMFb90IlykbvyduOlGAlmFFsC0l42EjqtVMQoH8_egi1-cez6g9ssGiIH3rw1oScUCJAmH3C57Ly_ghiKoyDlXqdNZFbhw_8wC9XdjCrYM0Dr1bcn3WzRNt_ACmQygnj5hcF9FdivLqQH6_4omJQdRW18vkWWmEO-QI0z2sU82W2q4YBSl0cKK_9gbggZbx9L0S2guPJh1yxfsiz2cXUNsXCmQOAECNsqkXAShW7wDm0_-uXgNs6QeqJ94gdce9jj_U7XHl8_rFQ84NLrdIvwa0rneU_RYHS4dUqfHMK07lqeMjH11ZLsL4KirBkPwK_vAYGGtYF5ARs-OC6BWBq3L35nHuzVRolF3pYVyNN3MOL_3nW-PFj8WreUTuV-SI5LC-yMa8oRGnZshoF_Z2y14A0ADgW-RbtGrpQDrHzGrbg72DomcHMcQAttJkup4lLvuRFNJcKU3V1AnuIsK4zXF_3JnUjcdeL_bCw3SUrB_G4rrKYoakLPyI6bGqdRgS1ZJs6QawuzjKVkRhvmimSjFiJVpSNpEuKi7r6A1o",
        }
      }
      
    let response = await axios(settings)
}
