<?php 

class Api extends CI_Controller 
{
    private $payload;

    public function __construct()
    {
        parent::__construct();

        // This helps narrow requests and easily handle CORS Preflight from browsers.
        if (! in_array($_SERVER["REQUEST_METHOD"], ["GET", "POST"])) exit("Request must GET or POST");

        $this->load->model("Admin_model");
        $this->load->model("Company_model");
        $this->load->model("Employee_model");

        $this->payload = $this->input->raw_input_stream;
        if (empty($this->payload))
        {
            exit(
                $this->formJSONResponse(
                    false,
                    array(
                        "message" => "Payload is empty"
                    )
                )
            );
        }     
    }

    protected function getJSONPayload()
    {
        return json_decode($this->payload, true);
    }
    protected function formJSONResponse($status, $data)
    {
        header("Content-type: application/json");
        return json_encode(
            [
                "status" => ($status)? "succeeded" : "failed",
                "data" => $data
            ]
        );
    }

    public function registerCompany()
    {
        $done = $this->Company_model->insertCompany($this->getJSONPayload());
        exit(
            ($done)? 
                $this->formJSONResponse(true, [ "message" => "done" ])
             :
                $this->formJSONResponse(false, [ "message" => "Unable to register company. Try again later." ])
        );
    }
    public function getCompanies()
    {
        $companies = $this->Company_model->findCompanies();
        if ( ! $companies)
        {
            exit($this->formJSONResponse(false, [ "message" => "No companies found." ]));
        }
        exit($this->formJSONResponse(true, $companies));
    }

    public function registerEmployee()
    {
        $done = $this->Employee_model->insertEmployee($this->getJSONPayload());
        exit(
            ($done)?
                $this->formJSONResponse(true, [ "message" => "done" ])
             :
                $this->formJSONResponse(true, [ "message" => "Unable to register employee. Try again later." ])
        );
    }
    public function getEmployees()
    {
        $employees = $this->Employee_model->findEmployees($this->getJSONPayload());
        if ( ! $employees)
        {
            exit($this->formJSONResponse(false, [ "message" => "No employees found." ]));
        }
        exit($this->formJSONResponse(true, $employees));
    }

    public function getAdmin()
    {
        exit(
            json_encode(
                $this->Admin_model->findAdmin()
            )
        );
    }

    public function getEmployee()
    {
        exit(
            json_encode(
                $this->Employee_model->findEmployee(
                    $payload["name"]
                )
            )
        );
    }
}