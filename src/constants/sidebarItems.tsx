import type { MenuProps } from "antd";

import {
  ProfileOutlined,
  BorderOuterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { USER_ROLE } from "./role";
import Link from "next/link";
import { Department } from "./adminDepartments";

export const sidebarItems = (role: string, department?: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile-account`}>Profile Account</Link>,
          key: `/${role}/profile-account`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const patientSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Make Appointment",
      key: "appointment",
      icon: <BorderOuterOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/doctor-appointment`}>
              Doctor&apos;s Appointment
            </Link>
          ),
          key: `/${role}/doctor-appointment`,
        },
        {
          label: (
            <Link href={`/${role}/psychologist-appointment`}>
              Psychologist Appointment
            </Link>
          ),
          key: `/${role}/psychologist-appointment`,
        },
      ],
    },
  ];

  const patientAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Patient's",
      key: "manage-patient",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/${department}/patient-list`}>
              All Patient List
            </Link>
          ),
          key: `/${role}/${department}/patient-list`,
        },
      ],
    },
  ];

  const doctorAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Doctor's",
      key: "manage-doctor",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/${department}/doctor-list`}>
              All Doctor&apos;s List
            </Link>
          ),
          key: `/${role}/${department}/doctor-list`,
        },
      ],
    },
  ];

  const psychologistAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Psychologist's",
      key: "manage-psychologist",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/${department}/psychologist-list`}>
              AllPsychologist&apos;s List
            </Link>
          ),
          key: `/${role}/${department}/psychologist-list`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: "Manage Admin's",
      key: "manage-admin",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/admin-list`}>All Admin List</Link>,
          key: `/${role}/admin-list`,
        },
      ],
    },
    {
      label: "Manage Patient's",
      key: "manage-patient",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/patient-list`}>All Patient List</Link>,
          key: `/${role}/patient-list`,
        },
      ],
    },
    {
      label: "Manage Doctor's",
      key: "manage-doctor",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/doctor-list`}>All Doctor&apos;s List</Link>
          ),
          key: `/${role}/doctor-list`,
        },
      ],
    },
    {
      label: "Manage Psychologist's",
      key: "manage-psychologist",
      icon: <UserOutlined />,
      children: [
        {
          label: (
            <Link href={`/${role}/${department}/psychologist-list`}>
              All Psychologist&apos;s List
            </Link>
          ),
          key: `/${role}/${department}/psychologist-list`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.ADMIN && department === Department.DOCTOR_DEPARTMENT)
    return doctorAdminSidebarItems;
  else if (
    role === USER_ROLE.ADMIN &&
    department === Department.PSYCHOLOGIST_DEPARTMENT
  )
    return psychologistAdminSidebarItems;
  else if (
    role === USER_ROLE.ADMIN &&
    department === Department.PATIENT_DEPARTMENT
  )
    return patientAdminSidebarItems;
  else if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.PATIENT) return patientSidebarItems;
};
