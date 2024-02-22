import {
  Box,
  Button,
  Container,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useState, useId } from "react";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import SelectInput from "../components/SelectInput";
import RadioInput from "../components/RadioInput";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  const id = useId();
  const [active, setActive] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({
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

  const educationData = [
    {
      id: 1,
      name: "İlkokul",
    },
    { id: 2, name: "Ortaokul" },
    {
      id: 3,
      name: "Lise",
    },
    { id: 4, name: "Önlisans" },
    { id: 5, name: "Lisans" },
    { id: 6, name: "Yükseklisans" },
  ];

  const driversLicanseData = [
    {
      id: 1,
      name: "A",
    },
    { id: 2, name: "A1" },
    {
      id: 3,
      name: "B",
    },
    { id: 4, name: "B1" },
    { id: 5, name: "E" },
    { id: 6, name: "F" },
  ];

  const genderData = [
    {
      id: 1,
      name: "Erkek",
      value: "gender",
    },
    {
      id: 2,
      name: "Kadın",
      value: "gender",
    },
  ];

  const marriageData = [
    {
      id: 1,
      name: "Evli",
      value: "marriage",
    },
    {
      id: 2,
      name: "Bekar",
      value: "marriage",
    },
  ];

  useEffect(() => {
    if (userData.phone.length >= 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [userData.phone]);


  const handleChange = (e) => {
    const { name, value } = e.target;

  if (value.includes(' ')) {
    console.log('Boşluk karakteri içermemelidir.');
    return;
  }

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUserData = localStorage.getItem("userData");
    const existingUserList = storedUserData ? JSON.parse(storedUserData) : [];

    const newUserData = {
      id: uuidv4(),
      name: userData.name,
      surname: userData.surname,
      phone: userData.phone,
      address: userData.address,
      age: userData.age,
      education: userData.education,
      marriage: userData.marriage,
      driversLicanse: userData.driversLicanse,
      gender: userData.gender,
      mail: userData.mail,
    };

    let users;
    if (existingUserList?.userData?.length > 0) {
      users = { userData: [...existingUserList.userData, newUserData] };
    } else {
      users = { userData: [newUserData] };
    }
    console.log({ users });

    localStorage.setItem("userData", JSON.stringify(users));
    setUserList((prevUserData) => [...prevUserData, newUserData]);

    setUserData({
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

  // useEffect(() => {
  //   console.log("Güncellenmiş Değer:", userData);
  // }, [userData]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#1769aa",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
          height: "80%",
          width: "50%",
          borderRadius: "25px",
          padding: "1rem",
        }}
      >
        <FormControl>
          <form onSubmit={handleSubmit}>
            <Container maxWidth="sm">
              <Stack spacing={3} direction="column">
                <Box sx={{}}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Input
                      name="name"
                      onChange={handleChange}
                      value={userData.name}
                      type={"text"}
                      label={"Ad"}
                    />
                    <Input
                      name="surname"
                      onChange={handleChange}
                      value={userData.surname}
                      type={"text"}
                      label={"Soyad"}
                    />
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Input
                      name="phone"
                      onChange={handleChange}
                      value={userData.phone}
                      type={"number"}
                      label={"Tel No"}
                    />
                    <Input
                      name={"mail"}
                      onChange={handleChange}
                      value={userData.mail}
                      type={"email"}
                      label={"Email"}
                    />
                  </Box>
                  <Box sx={{}}>
                    <Input
                      name={"age"}
                      onChange={handleChange}
                      value={userData.age}
                      type={"number"}
                      label={"Yaş"}
                    />
                  </Box>
                  <Box sx={{ marginLeft: "15px" }}>
                    <Box>
                      <RadioInput
                        name={"gender"}
                        onChange={handleChange}
                        label={"Cinsiyet"}
                        data={genderData}
                        value={userData.gender}
                      />
                    </Box>
                    <Box>
                      <RadioInput
                        name={"marriage"}
                        onChange={handleChange}
                        label={"Medeni Durumu"}
                        data={marriageData}
                        value={userData.marriage}
                      />
                    </Box>
                  </Box>
                  <Box sx={{ marginLeft: "15px" }}>
                    <TextArea
                      onChange={handleChange}
                      name={"address"}
                      label={"Adres"}
                      value={userData.address}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box>
                    <SelectInput
                      name={"education"}
                      value={userData.education}
                      type={"select"}
                      label={"Eğitim Durumu"}
                      data={educationData}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ margin: "15px 0px" }}>
                    <SelectInput
                      name={"driversLicanse"}
                      onChange={handleChange}
                      value={userData.driversLicanse}
                      type={"select"}
                      label={"Ehliyet Belgesi Durumu"}
                      data={driversLicanseData}
                    />
                  </Box>
                </Box>
              </Stack>
            </Container>
            
              <Button
                sx={{ marginLeft: "25px" }}
                type="submit"
                variant="contained"
                disabled={!active} 
              >
                Kaydet
              </Button>
          </form>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Register;
