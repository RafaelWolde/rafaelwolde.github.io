$files = (Get-ChildItem -Recurse index.html)


Write-Output "const sitesList = [" > hello.txt

foreach ($file in $files) {

    
    $fileContent = (Get-Content $file)
    $pattern = "<title>(.*?)</title>"
    $title = [regex]::Match($fileContent, $pattern).Groups[1].Value
    $pattern = '<meta name="description" content="(.*?)">'
    $description = [regex]::Match($fileContent, $pattern).Groups[1].Value
    $relativePath = (Resolve-Path -Relative $file)
    $relativePathChange = $relativePath.replace('\', '/')
    # (GetStringBetweenTwoStrings('', ">", $file));
    $objectInstance = "{ title: '$title', relativePath: '$relativePathChange', description: '$description'}, "
    Write-Output $objectInstance >> hello.txt
    
}

Write-Output "]" >> hello.txt

Get-Content .\hello.txt | Set-Content .\sites.js

Get-Content .\initializer.js | Add-Content .\sites.js