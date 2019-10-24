<?php

class Employee_model extends CI_Model 
{
    private $companyId;
    private $firstName;
    private $lastName;
    private $profilePhoto;

    public function __construct()
    {
        $this->load->database();
    }

    public function insertEmployee($data)
    {
        $sql = "Insert Into employee(company_id, firstname, lastname, profile_photo)
                Values(?, ?, ?, ?)";
                
        return $this->db->query(
            $sql,
            array(
                $data["companyId"],
                $data["firstName"],
                $data["lastName"],
                $data["photo"]
            )
        );
    }

    public function findEmployees($data)
    {
        $sql = "Select e.id, e.firstname, e.lastname, e.profile_photo, e.company_id, c.name as company_name 
                From employee e
                Inner Join company c On c.id = e.company_id";
        if (! empty($data["name"]))
        {
            $sql .= " Where e.firstname Like '%" . $this->db->escape_like_str($data["name"]) . "%' ESCAPE '!'";
        }

        $query = $this->db->query($sql);

        return $query->result_array();
    }
}