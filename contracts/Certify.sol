pragma solidity ^0.4.17;
contract Certify
{

struct applicantEducation
{
  //Certificates by CA to each the educational qualification
  string X;
  string XII;
  string graduation;
  string postGraduation;
  string phd;
  
}

struct applicantEmployement
{
  
  string previousEmployerId;
  string fromDate;
  string toDate;
  string ctc;
  string tenureInLastRole;
  string certificate;//by CA
}

struct applicantCertification
{
  string certificateName;
  string cerificateCode;
  string certificationEntity;
  string certifiedOn;
}

struct applicantTenth
{
  string registrationNumber;
  string schoolName;
  string batch;
  string cgpa;
  string region;
  string board;
  string status;
}

struct applicantTwelveth
{
  string registrationNumber;
  string schoolName;
  string batch;
  string cgpa;
  string region;
  string board;
  string status;
}


struct applicantDegree
{
  string registrationNumber;
  string college;
  string university;
  string batch;
  string cgpa;
  string region;
  string specialisation;
  string status;
  string degree;
}

mapping(string=>applicantEducation) applicantEducationDetails;
mapping(string=>applicantEmployement[]) applicantEmployementDetails;
mapping(string=>applicantCertification[]) applicantCertificationDetails;

mapping(string=>applicantTenth) applicantTenthDetails;
mapping(string=>applicantTwelveth) applicantTwelvethDetails;
mapping(string=>applicantDegree) applicantDegreeDetails;


function setTethDetails(string candidateId,string _registrationNumber,
  string _schoolName,
  string _batch,
  string _cgpa,
  string _region,
  string _board,
  string _status) public
  {
applicantTenthDetails[candidateId].registrationNumber=_registrationNumber;
applicantTenthDetails[candidateId].schoolName=_schoolName;
applicantTenthDetails[candidateId].batch=_batch;
applicantTenthDetails[candidateId].cgpa=_cgpa;
applicantTenthDetails[candidateId].region=_region;
applicantTenthDetails[candidateId].board=_board;
applicantTenthDetails[candidateId].status=_status;

  }

  function getTethDetails(string candidateId)  public returns(string _registrationNumber,
  string _schoolName,
  string _batch,
  string _cgpa,
  string _region,
  string _board,
  string _status) 
  {

_registrationNumber=applicantTenthDetails[candidateId].registrationNumber;
_schoolName=applicantTenthDetails[candidateId].schoolName;
_batch=applicantTenthDetails[candidateId].batch;
_cgpa=applicantTenthDetails[candidateId].cgpa;
_region=applicantTenthDetails[candidateId].region;
_board=applicantTenthDetails[candidateId].board;
_status=applicantTenthDetails[candidateId].status;

return(
   _registrationNumber,
  _schoolName,
  _batch,
  _cgpa,
  _region,
  _board,
  _status);

  }
 
function setTwelvethDetails(string candidateId,string _registrationNumber,
  string _schoolName,
  string _batch,
  string _cgpa,
  string _region,
  string _board,
  string _status) public
  {
applicantTwelvethDetails[candidateId].registrationNumber=_registrationNumber;
applicantTwelvethDetails[candidateId].schoolName=_schoolName;
applicantTwelvethDetails[candidateId].batch=_batch;
applicantTwelvethDetails[candidateId].cgpa=_cgpa;
applicantTwelvethDetails[candidateId].region=_region;
applicantTwelvethDetails[candidateId].board=_board;
applicantTwelvethDetails[candidateId].status=_status;

  }


 function getTwelvethDetails(string candidateId)  public returns(string _registrationNumber,
  string _schoolName,
  string _batch,
  string _cgpa,
  string _region,
  string _board,
  string _status) 
  {
_registrationNumber=applicantTwelvethDetails[candidateId].registrationNumber;
_schoolName=applicantTwelvethDetails[candidateId].schoolName;
_batch=applicantTwelvethDetails[candidateId].batch;
_cgpa=applicantTwelvethDetails[candidateId].cgpa;
_region=applicantTwelvethDetails[candidateId].region;
_board=applicantTwelvethDetails[candidateId].board;
_status=applicantTwelvethDetails[candidateId].status;

return(_registrationNumber,
  _schoolName,
  _batch,
  _cgpa,
  _region,
  _board,
  _status);

  }




  
function setDegreeDetails(string candidateId,  string _registrationNumber,
  string _college,
  string _university,
  string _batch,
  string _cgpa,
  string _status,
  string _degree) public
  {
applicantDegreeDetails[candidateId].registrationNumber=_registrationNumber;
applicantDegreeDetails[candidateId].college=_college;
applicantDegreeDetails[candidateId].university=_university;
applicantDegreeDetails[candidateId].batch=_batch;
applicantDegreeDetails[candidateId].cgpa=_cgpa;
applicantDegreeDetails[candidateId].status=_status;
applicantDegreeDetails[candidateId].degree=_degree;

  }

  function getDegreeDetails(string candidateId)  public returns(string _registrationNumber,
  string _college,
  string _university,
  string _batch,
  string _cgpa,
  string _status,
  string _degree) 
  {

_registrationNumber=applicantDegreeDetails[candidateId].registrationNumber;
_college=applicantDegreeDetails[candidateId].college;
_university=applicantDegreeDetails[candidateId].university;
_batch=applicantDegreeDetails[candidateId].batch;
_cgpa=applicantDegreeDetails[candidateId].cgpa;
_status=applicantDegreeDetails[candidateId].status;
_degree=applicantDegreeDetails[candidateId].degree;

return(
   _registrationNumber,
  _college,
  _university,
  _batch,
  _cgpa,
  _status,
  _degree
  );

  }



//older code starts below-check if it could be reused

function setEducationalDetails(string applicantId,string _X,string _XII,string _graduation,string _postGraduation,string _phd) public
{
 applicantEducationDetails[applicantId].X=_X;
  applicantEducationDetails[applicantId].XII=_XII;
 applicantEducationDetails[applicantId].graduation =_graduation;
 applicantEducationDetails[applicantId].postGraduation = _postGraduation;
  applicantEducationDetails[applicantId].phd = _phd;
}

function getEducationalDetails(string applicantId) public returns(
  string _X,
  string _XII,
  string _graduation,
  string _postGraduation,
  string _phd)
{
  _X=applicantEducationDetails[applicantId].X;
  _XII=applicantEducationDetails[applicantId].XII;
  _graduation=applicantEducationDetails[applicantId].graduation;
  _postGraduation=applicantEducationDetails[applicantId].postGraduation;
  _phd=applicantEducationDetails[applicantId].phd;

  return ( _X, _XII,_graduation,_postGraduation,_phd);

}

function setApplicantEmployment(string applicantId,string _previousEmployer,string _fromDate,string _toDate,string _ctc, string _tenure,string _certificate) public
{

    applicantEmployement appEd;
    appEd.previousEmployerId=_previousEmployer;
    appEd.fromDate=_fromDate;
    appEd.toDate =_toDate;
    appEd.certificate=_certificate;
    appEd.ctc=_ctc;
    appEd.tenureInLastRole=_tenure;


applicantEmployementDetails[applicantId].push(appEd);
}


function getApplicantEmplyement(string applicantId,string Employeeid) public returns(string _previousEmployer,string _fromDate,string _toDate,string _ctc,string _tenure,string _certificate)
{

    uint length=applicantEmployementDetails[applicantId].length;

     for(uint i=0;i < length;i++)
  {
 _previousEmployer=applicantEmployementDetails[applicantId][i].previousEmployerId;

if(keccak256(Employeeid) ==keccak256( _previousEmployer))
{
_fromDate=applicantEmployementDetails[applicantId][i].fromDate;
_toDate=applicantEmployementDetails[applicantId][i].toDate;
_certificate=applicantEmployementDetails[applicantId][i].certificate;
_ctc=applicantEmployementDetails[applicantId][i].ctc;
_tenure=applicantEmployementDetails[applicantId][i].tenureInLastRole;



return(_previousEmployer, _fromDate, _toDate,_ctc,_tenure, _certificate);
}
  }
return("null", "null", "null", "null","null","null");

}
}
