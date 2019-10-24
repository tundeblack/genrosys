<?php

class Company_model extends CI_Model 
{
    private $name;
    private $address;

    public function __construct()
    {
        $this->load->database();
    }

    public function insertCompany($data)
    {
        $sql = "Insert Into company(name, address) Values(?, ?)";
        return $this->db->query(
            $sql, 
            array(
                $data["name"], 
                
                $data["address"]
            )
        );
    }

    public function findCompanies()
    {
        return $this->db->query("Select id, name, address From company")
                        ->result_array();
        
    }
}