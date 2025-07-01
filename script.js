var typed = new Typed(".text",{
    strings:["Frontend Developer", "Python Developer", "Django Frameworke","Web Developer"],
    typeSpeed : 10,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
});
 const viewAllBtn = document.getElementById("viewAllBtn");
  const extraCertificates = document.querySelectorAll(".extra-certificate");

  viewAllBtn.addEventListener("click", () => {
    extraCertificates.forEach(card => {
      card.style.display = "block";
    });
    viewAllBtn.style.display = "none";
  });
