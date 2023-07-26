import React from "react";
import Select from "../components/Select";
import styles from "../styles/Department.module.css";

const MyPage = () => {
  const options = [
    { value: "option1", label: "Select Department" },
    { value: "option2", label: "Education & Traning" },
    { value: "option3", label: "Financial Services" },
    { value: "option4", label: "IT Services and Consulting" },
    { value: "option5", label: "Software Product" },
    { value: "option6", label: "Hardware & Networking" },
  ];

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.departmentHeading}>Department</h1>

      <Select options={options} className={styles.departmentOption} />
    </div>
  );
};

export default MyPage;
