import React from 'react'

// import Scripts from './Scripts';

export default function Footer() {
  return (
    <>
<footer class="footer py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mb-4 mx-auto text-center">
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Company
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          About Us
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Team
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-5 me-3 mb-sm-0 mb-2">
          Membership
        </a>
      </div>
      <div class="col-lg-8 mx-auto text-center mb-4 mt-2">
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-4">
          <span class="text-lg fab fa-github"></span>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-8 mx-auto text-center mt-1">
        <p class="mb-0 text-secondary">
          Copyright &copy; <script>
            document.write(new Date().getFullYear())
          </script> Dev legends SEI7
        </p>
      </div>
    </div>
  </div>
</footer>
{/* <Scripts /> */}
    </>
  )
}
