<Target Name="MyPublishScripts" BeforeTargets="BeforePublish">-->	
		<Exec Command="ng build --prod --output-hashing none" />
	</Target>

	
	<ItemGroup>
		<None Include="node_modules\**"
			  CopyToPublishDirectory="Always"/>
	</ItemGroup>