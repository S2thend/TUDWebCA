export default function CommentBox(){

    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 float-left">
        <div className="Box hover-grow m-3 rounded-3 tooltipped tooltipped-n tooltipped-multiline mx-auto" aria-label="举例：
" style="cursor:pointer; width: 260px; max-height: 420px;" onClick="go_to_post( &quot;/zh/work/javascript/2020/06/05/zh-web-dev-basic-dom.html&quot;)">
          <div className="width-full avatar mb-md-0 d-flex flex-items-center color-bg-tertiary" style="height: 300px;">
            
              <p className="f0-light color-text-purple p-3">前端开发基础知识-什么是dom</p>
            
          </div>
          <div className="Box-body css-truncate css-truncate-overflow p-2 h2">
            <a className="" href="/zh/work/javascript/2020/06/05/zh-web-dev-basic-dom.html">
              前端开发基础知识-什么是dom
            </a>
          </div>
          <div className="Box-body css-truncate css-truncate-overflow p-2 f4">
            <p className="">
              2020-06-05 00:43:26 +0800
            </p>
          </div>
        </div>
      </div>
    )
}