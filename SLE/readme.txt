<Target Name="MyPublishScripts" BeforeTargets="BeforePublish">-->	
		<Exec Command="ng build --prod --output-hashing none" />
	</Target>

