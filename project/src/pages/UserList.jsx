import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);
  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);
  const [deletedUser, setDeletedUser] = useState({
    name: "",
    surname: "",
    id: "",
  });
  const [updatedUser, setUpdatedUser] = useState({
    id: "",
    name: "",
    surname: "",
    phone: "",
    address: "",
    age: "",
    education: "",
    marriage: "",
    driversLicanse: "",
    gender: "",
    mail: "",
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
      const { userData } = JSON.parse(storedUserData);
      setUserList(userData);
    }
  }, []);

  const handleDeletedUser = (name, surname, id) => {
    setShowPopUp(true);
    setDeletedUser({ name, surname, id });
  };

  const deleteUser = () => {
    const filteredUserList = userList.filter(
      (user) => user.id !== deletedUser.id
    );
    localStorage.setItem(
      "userData",
      JSON.stringify({ userData: filteredUserList })
    );
    setUserList(filteredUserList);
    setShowPopUp(false);
    setDeletedUser({ name: "", surname: "", id: "" });
  };

  const handleUpdateUser = (
    id,
    name,
    surname,
    phone,
    address,
    age,
    education,
    marriage,
    driversLicanse,
    gender,
    mail
  ) => {
    setShowUpdatePopUp(true);
    setUpdatedUser({
      id,
      name,
      surname,
      phone,
      address,
      age,
      education,
      marriage,
      driversLicanse,
      gender,
      mail,
    });
    setShowUpdatePopUp(true)
  };

  // useEffect(() => {
  //   console.log("Güncellenmiş Kullanıcı:", updatedUser);
  // }, [updatedUser]);

  const deletePopUp = () => {
    return (
      <Modal
        open={showPopUp}
        onClose={() => {
          setShowPopUp(false);
          setDeletedUser({ name: "", surname: "", id: "" });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            backgroundColor: "white",
            padding: "15px",
            width: "500px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ margin: "15px" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            " {deletedUser.name} {deletedUser.surname} " Kullanıcısını silmek
            istediğinize emin misiniz ?
          </Typography>
          <Box>
            <Button
              sx={{ width: "100px", height: "50px", margin: "1rem" }}
              variant="contained"
              onClick={() => setShowPopUp(false)}
            >
              İptal
            </Button>
            <Button
              sx={{ width: "100px", height: "50px", margin: "1rem" }}
              variant="contained"
              onClick={deleteUser}
            >
              Sil
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  };

  const updatePopUp = () => {
    const [popupUpDateUser, setPopupUpDateUser] = useState({
      id: "",
      name: "",
      surname: "",
      phone: "",
      address: "",
      age: "",
      education: "",
      marriage: "",
      driversLicanse: "",
      gender: "",
      mail: "",
    });

    const updateUser = (updatedUserData) => {
      const updatedList = userList.map((user) =>
        user.id === updatedUserData.id ? updatedUserData : user
      );
  
      localStorage.setItem("userData", JSON.stringify({ userData: updatedList }));
      setUserList(updatedList);
      setShowUpdatePopUp(false);
      setUpdatedUser({
        id: "",
        name: "",
        surname: "",
        phone: "",
        address: "",
        age: "",
        education: "",
        marriage: "",
        driversLicanse: "",
        gender: "",
        mail: "",
      });
    };

    const popUpHandleChange = (e) => {
      const { name, value } = e.target;
      setPopupUpDateUser((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    useEffect(() => {
      // pop-up açıldığında, güncellenecek kullanıcının bilgilerini al
      setPopupUpDateUser(updatedUser);
    }, [showUpdatePopUp, updatedUser]);


    return (
      <Modal
        open={showUpdatePopUp}
        onClose={() => {
          setShowUpdatePopUp(false);
          setPopupUpDateUser({
            id: "",
            name: "",
            surname: "",
            phone: "",
            address: "",
            age: "",
            education: "",
            marriage: "",
            driversLicanse: "",
            gender: "",
            mail: "",
          })
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              backgroundColor: "white",
              padding: "15px",
              width: "50%",
              height: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <TextField
                  required
                  sx={{ margin: "1rem", width: "75px" }}
                  name="name"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.name}
                  label="İsim"
                  onChange={popUpHandleChange}
                />
                <TextField
                  required
                  sx={{ margin: "1rem", width: "75px" }}
                  name="surname"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.surname}
                  label="Soyisim"
                  onChange={popUpHandleChange}
                />
              </Box>

              <Box>
                <TextField
                  required
                  sx={{ margin: "1rem", width: "120px" }}
                  name="phone"
                  type="number"
                  variant="standard"
                  value={popupUpDateUser.phone}
                  label="Tel No"
                  onChange={popUpHandleChange}
                />
                <TextField
                  required
                  sx={{ margin: "1rem" }}
                  name="mail"
                  type="mail"
                  variant="standard"
                  value={popupUpDateUser.mail}
                  label="Mail"
                  onChange={popUpHandleChange}
                />
              </Box>

              <Box>
                <TextField
                  required
                  sx={{ margin: "1rem", width: "45px" }}
                  name="age"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.age}
                  label="Yaş"
                  onChange={popUpHandleChange}
                />
                <TextField
                  required
                  sx={{ margin: "1rem", width: "100px" }}
                  name="education"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.education}
                  label="Eğitim"
                  onChange={popUpHandleChange}
                />
              </Box>

              <Box>
                <TextField
                  required
                  sx={{ margin: "1rem", width: "75px" }}
                  name="marriage"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.marriage}
                  label="Medeni Hal"
                  onChange={popUpHandleChange}
                />
                <TextField
                  required
                  sx={{ margin: "1rem", width: "50px" }}
                  name="driversLicanse"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.driversLicanse}
                  label="Ehliyet"
                  onChange={popUpHandleChange}
                />
              </Box>

              <Box>
                <TextField
                  required
                  sx={{ margin: "1rem", width: "75px" }}
                  name="gender"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.gender}
                  label="Cinsiyet"
                  onChange={popUpHandleChange}
                />
                <TextField
                  required
                  sx={{ margin: "1rem" }}
                  name="address"
                  type="text"
                  variant="standard"
                  value={popupUpDateUser.address}
                  label="Adres"
                  onChange={popUpHandleChange}
                />
              </Box>
            </Box>

            <Box>
              <Button
                sx={{ width: "100px", height: "50px", margin: "1rem" }}
                variant="contained"
                onClick={() => setShowUpdatePopUp(false)}
              >
                İptal
              </Button>
              <Button
                sx={{ width: "100px", height: "50px", margin: "1rem" }}
                variant="contained"
                onClick={() => updateUser(popupUpDateUser)}
              >
                Kaydet
              </Button>
            </Box>
          </Box>
        </form>
      </Modal>
    );
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Kullanıcılar</TableCell>
              <TableCell align="right">Tel No</TableCell>
              <TableCell align="right">E-Posta</TableCell>
              <TableCell align="right">Yaş</TableCell>
              <TableCell align="right">Eğitim Durumu</TableCell>
              <TableCell align="right">Evlilik Durumu</TableCell>
              <TableCell align="right">Sürücü Belgesi Durumu</TableCell>
              <TableCell align="right">Cinsiyet</TableCell>
              <TableCell align="right">Adres</TableCell>
              <TableCell align="right">Kullanıcıyı Sil</TableCell>
              <TableCell align="right">Kullanıcıyı Düzenle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name} {user.surname}
                </TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.mail}</TableCell>
                <TableCell align="right">{user.age}</TableCell>
                <TableCell align="right">{user.education}</TableCell>
                <TableCell align="right">{user.marriage}</TableCell>
                <TableCell align="right">{user.driversLicanse}</TableCell>
                <TableCell align="right">{user.gender}</TableCell>
                <TableCell align="right">{user.address}</TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      handleDeletedUser(user.name, user.surname, user.id)
                    }
                    type="submit"
                    variant="contained"
                  >
                    Sil
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() =>
                      handleUpdateUser(
                        user.id,
                        user.name,
                        user.surname,
                        user.phone,
                        user.address,
                        user.age,
                        user.education,
                        user.marriage,
                        user.driversLicanse,
                        user.gender,
                        user.mail
                      )
                    }
                    type="submit"
                    variant="contained"
                  >
                    Düzenle
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {/* <TableCell component="th" scope="row"></TableCell>
            <TableCell align="right">5398353243</TableCell>
            <TableCell align="right">koray@gmail.com</TableCell>
            <TableCell align="right">31</TableCell>
            <TableCell align="right">Lisans</TableCell>
            <TableCell align="right">Bekar</TableCell>
            <TableCell align="right">A1</TableCell>
            <TableCell align="right">Erkek</TableCell>
            <TableCell align="right">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </TableCell> */}
          </TableBody>
        </Table>
      </TableContainer>
      {deletePopUp()}
      {updatePopUp()}
    </>
  );
};

export default UserList;
