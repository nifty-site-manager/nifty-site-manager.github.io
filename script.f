nsm cp docs/fns/dep docs/fns/item
nsm cp docs/fns/dep docs/fns/paginate
nsm cp docs/fns/dep "docs/fns/paginate\,no_items_per_page"
touch "content/docs/fns/paginate,no_items_per_page-post-build.f"
nsm cp docs/fns/dep "docs/fns/paginate\,separator"
touch "content/docs/fns/paginate,separator-post-build.f"
nsm cp docs/fns/dep "docs/fns/paginate\,template"
touch "content/docs/fns/paginate,template-post-build.f"

<#--
	nsm mv "docs/fns/\@---" docs/fns/\#--
	nsm rm "docs/fns/\@--"
	nsm rm docs/fns/--[[
--#>

<#--
	nsm cp docs/fns/dep "docs/fns/<#--"
	nsm cp docs/fns/dep "docs/fns/\@--"
	nsm cp docs/fns/dep "docs/fns/\@---"
	nsm cp docs/fns/dep docs/fns/--divdiv
	nsm cp docs/fns/dep docs/fns/--[[
	nsm cp docs/fns/dep docs/fns/divdiv
	nsm cp docs/fns/dep docs/fns/div\*
	nsm cp docs/fns/dep docs/fns/\#
	nsm cp docs/fns/dep docs/fns/!newline
--#>